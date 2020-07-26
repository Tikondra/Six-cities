import {extend} from "../../utils";
import {createPlaces} from "../../adapters/places";
import {createReviews} from "../../adapters/reviews";
import {ActionCreator as AppActionCreator} from "../app-state/app-state";
import NameSpace from "../name-space";

const initialState = {
  places: [],
};

const ActionType = {
  LOAD_PLACES: `LOAD_PLACES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
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

  loadFavorites: (favorites) => (
    {
      type: ActionType.LOAD_FAVORITE,
      payload: favorites,
    }
  )
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
  ),

  loadFavorites: () => (dispatch, getState, api) => (
    api.get(`/favorite`)
      .then((response) => dispatch(ActionCreator.loadFavorites(createPlaces(response.data))))
  ),

  postFavorite: () => (dispatch, getState, api) => {
    const places = getState()[NameSpace.DATA].places;
    const id = getState()[NameSpace.APP_STATE].activeOffer.id;
    const isFavorite = getState()[NameSpace.APP_STATE].activeOffer.isFavorite;
    const status = isFavorite ? 0 : 1;

    return api.post(`/favorite/${id}/${status}`)
      .then((response) => dispatch(AppActionCreator.changeActiveOffer(createPlaces([response.data])[0])))
      .then(() => places.map((place) => {
        if (place.id === id) {
          return extend(place, {
            isFavorite: !isFavorite
          });
        }

        return place;
      }))
      .then((updatePlaces) => {
        dispatch(ActionCreator.loadPlaces(updatePlaces));
        dispatch(Operation.loadFavorites());
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

    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorites: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
