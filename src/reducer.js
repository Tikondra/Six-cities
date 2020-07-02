import offers from "./mocks/offers";
import {Cities} from "./mocks/const";
import {extend} from "./utils";
import {PageType} from "./constants";

const initialState = {
  city: Cities[0],
  offers,
  cities: Cities,
  page: PageType.MAIN,
  activeOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_PAGE: `CHANGE_PAGE`,
};

const ActionCreator = {
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer,
  }),

  changePage: () => ({
    type: ActionType.CHANGE_PAGE,
    payload: PageType.PROPERTY,
  }),

  getOffers: () => ({
    type: ActionType.CHANGE_CITY,
    payload: 1,
  }),

  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: 1,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CHANGE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });

    case ActionType.CHANGE_PAGE:
      return extend(state, {
        page: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
