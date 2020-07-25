import {Cities} from "../../mocks/const";
import {extend} from "../../utils";
import {SORT_TYPES, SortType} from "../../constants";

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
  cities: getCityList(0),
  sortTypes: SORT_TYPES,
  activeOffer: null,
  activePlace: null,
  sortType: SortType.POPULAR,
  sortIsOpen: false,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  OPEN_SORT_LIST: `OPEN_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  TO_PLACE: `TO_PLACE`,
};

const ActionCreator = {
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer,
  }),

  toPlace: (offer) => ({
    type: ActionType.TO_PLACE,
    payload: offer,
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
        sortType: SortType.POPULAR,
        sortIsOpen: false,
      });

    case ActionType.CHANGE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });

    case ActionType.TO_PLACE:
      return extend(state, {
        activePlace: action.payload
      });

    case ActionType.OPEN_SORT_LIST:
      return extend(state, {
        sortIsOpen: action.payload,
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
        sortIsOpen: false,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
