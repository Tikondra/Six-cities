import {extend} from "../../utils";
import {createPlaces} from "../../adapters/places";
import {createReviews} from "../../adapters/reviews";

const initialState = {
  places: [],
};

const ActionType = {
  LOAD_PLACES: `LOAD_PLACES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`
};

const ActionCreator = {
  loadPlaces: (places) => (
    {
      type: ActionType.LOAD_PLACES,
      payload: places,
    }
  ),

  loadReviews: (reviews) => (
    {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    }
  ),

  loadNearbyPlaces: (places) => (
    {
      type: ActionType.LOAD_NEARBY,
      payload: places,
    }
  ),
};

const Operation = {
  loadPlaces: () => (dispatch, getState, api) => (
    api.get(`/hotels`)
      .then((response) => dispatch(ActionCreator.loadPlaces(createPlaces(response.data))))
  ),

  loadReviews: (id) => (dispatch, getState, api) => (
    api.get(`/comments/${id}`)
      .then((response) => dispatch(ActionCreator.loadReviews(createReviews(response.data))))
  ),

  loadNearbyPlaces: (id) => (dispatch, getState, api) => (
    api.get(`/hotels/${id}/nearby`)
      .then((response) => dispatch(ActionCreator.loadNearbyPlaces(createPlaces(response.data))))
  )
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PLACES:
      return extend(state, {
        places: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearbyPlaces: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
