import offers from "./mocks/offers";
import {Cities} from "./mocks/const";
import {extend} from "./utils";
import {PageType} from "./constants";

const someOffers = (activeCity) => offers.filter((offer) => offer.city === activeCity.title);
const getCityList = (index) => Cities.map((it) => {
  if (it.title === Cities[index].title) {
    return extend(it, {
      isActive: true,
    });
  }

  return extend(it, {
    isActive: false,
  });
});

const initialState = {
  city: Cities[0],
  offers: someOffers(Cities[0]),
  cities: getCityList(0),
  page: PageType.MAIN,
  activeOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
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

  changeCity: (index) => ({
    type: ActionType.CHANGE_CITY,
    payload: index,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const cities = getCityList(action.payload);
      return extend(state, {
        cities,
        city: cities[action.payload],
        offers: someOffers(cities[action.payload]),
      });

    case ActionType.CHANGE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });

    case ActionType.CHANGE_PAGE:
      return extend(state, {
        page: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
