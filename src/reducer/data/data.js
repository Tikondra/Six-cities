import {extend} from "../../utils";
import {createPlaces} from "../../adapters/places";

const initialState = {
  places: [],
};

const ActionType = {
  LOAD_PLACES: `LOAD_PLACES`,
};

const ActionCreator = {
  loadPlaces: (places) => {
    return {
      type: ActionType.LOAD_PLACES,
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
};

const reducer = (state = initialState, action) => {
  if (action.type === ActionType.LOAD_PLACES) {
    return extend(state, {
      places: action.payload,
    });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
