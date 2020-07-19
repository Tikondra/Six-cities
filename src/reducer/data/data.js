import {extend} from "../../utils";
import {createPlaces} from "../../adapters/places";
import NameSpace from "../name-space";
import {createReviews} from "../../adapters/reviews";

const initialState = {
  places: [],
  reviews: [],
  nearbyPlaces: [],
};

const ActionType = {
  LOAD_PLACES: `LOAD_PLACES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`
};

const ActionCreator = {
  loadPlaces: (places) => {
    return {
      type: ActionType.LOAD_PLACES,
      payload: places,
    };
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  loadNearbyPlaces: (places) => {
    return {
      type: ActionType.LOAD_NEARBY,
      payload: places,
    };
  },
};

const Operation = {
  loadPlaces: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => createPlaces(response.data))
      .then((places) => {
        dispatch(ActionCreator.loadPlaces(places));
      });
  },

  loadReviews: () => (dispatch, getState, api) => {
    const id = getState()[NameSpace.APP_STATE].activeOffer.id;

    return api.get(`/comments/${id}`)
      .then((response) => createReviews(response.data))
      .then((reviews) => {
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },

  loadNearbyPlaces: () => (dispatch, getState, api) => {
    const id = getState()[NameSpace.APP_STATE].activeOffer.id;

    return api.get(`/hotels/${id}/nearby`)
      .then((response) => createPlaces(response.data))
      .then((places) => {
        dispatch(ActionCreator.loadNearbyPlaces(places));
      });
  }
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
