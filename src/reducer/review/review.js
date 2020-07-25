import {extend} from "../../utils";
import NameSpace from "../name-space";
import {ActionCreator as dataActionCreator} from "../data/data";
import {createReviews} from "../../adapters/reviews";

export const isDisabledSubmit = (stars, comment) => !(stars > 0 && comment.length > 50 && comment.length < 300);

const initialState = {
  btnIsDisabled: true,
  formIsDisabled: false,
  rating: 0,
  comment: ``,
  error: false,
};

const ActionType = {
  CHANGE_RATING: `CHANGE_RATING`,
  CHANGE_COMMENT: `CHANGE_COMMENT`,
  BLOCKED_FORM: `BLOCKED_FORM`,
  RESET_FORM: `RESET_FORM`,
  SHOW_ERROR: `SHOW_ERROR`
};

const ActionCreator = {
  changeRating: (rating) => (
    {
      type: ActionType.CHANGE_RATING,
      payload: rating,
    }
  ),

  changeComment: (comment) => (
    {
      type: ActionType.CHANGE_COMMENT,
      payload: comment,
    }
  ),

  blockedForm: (state) => (
    {
      type: ActionType.BLOCKED_FORM,
      payload: state
    }
  ),

  resetForm: () => (
    {
      type: ActionType.RESET_FORM,
      payload: initialState
    }
  ),

  showError: (state) => (
    {
      type: ActionType.SHOW_ERROR,
      payload: state
    }
  )
};

const Operation = {
  postReview: (comment, rating) => (dispatch, getState, api) => {
    const id = getState()[NameSpace.APP_STATE].activeOffer.id;
    dispatch(ActionCreator.blockedForm(true));

    return api.post(`/comments/${id}`,
        {
          "comment": comment,
          "rating": rating,
        }
    )
      .then((response) => createReviews(response.data))
      .then((reviews) => {
        dispatch(dataActionCreator.loadReviews(reviews));
        dispatch(ActionCreator.resetForm());
      })
      .catch(() => {
        dispatch(ActionCreator.blockedForm(false));
        dispatch(ActionCreator.showError(true));
        setTimeout(() => {
          dispatch(ActionCreator.showError(false));
        }, 2000);
      });

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_RATING:
      return extend(state, {
        rating: action.payload,
        btnIsDisabled: isDisabledSubmit(action.payload, state.comment)
      });

    case ActionType.CHANGE_COMMENT:
      return extend(state, {
        comment: action.payload,
        btnIsDisabled: isDisabledSubmit(state.rating, action.payload)
      });

    case ActionType.BLOCKED_FORM:
      return extend(state, {
        formIsDisabled: action.payload
      });

    case ActionType.RESET_FORM:
      return extend(state, action.payload);

    case ActionType.SHOW_ERROR:
      return extend(state, {
        error: action.payload
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
