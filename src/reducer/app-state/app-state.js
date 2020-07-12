import offers from "../../mocks/offers";
import {Cities} from "../../mocks/const";
import {extend, getOffersBySort} from "../../utils";
import {PageType, SORT_TYPES, SortType} from "../../constants";

const someOffers = (activeCity) => offers.filter((offer) => offer.city === activeCity.title);
const getCityList = (index) => Cities.map((city) => {
  if (city.title === Cities[index].title) {
    return extend(city, {
      isActive: true,
    });
  }

  return extend(city, {
    isActive: false,
  });
});

const initialState = {
  city: Cities[0],
  offers: someOffers(Cities[0]),
  cities: getCityList(0),
  sortTypes: SORT_TYPES,
  page: PageType.MAIN,
  activeOffer: null,
  sortType: SortType.POPULAR,
  sortIsOpen: false,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  OPEN_SORT_LIST: `OPEN_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`
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

  openSortList: () => ({
    type: ActionType.OPEN_SORT_LIST,
    payload: true,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const cities = getCityList(action.payload);
      return extend(state, {
        cities,
        city: cities[action.payload],
        offers: someOffers(cities[action.payload]),
        sortType: SortType.POPULAR,
        sortIsOpen: false,
      });

    case ActionType.CHANGE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });

    case ActionType.CHANGE_PAGE:
      return extend(state, {
        page: action.payload,
      });

    case ActionType.OPEN_SORT_LIST:
      return extend(state, {
        sortIsOpen: action.payload,
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
        sortIsOpen: false,
        offers: getOffersBySort(someOffers(state.city), action.payload),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
