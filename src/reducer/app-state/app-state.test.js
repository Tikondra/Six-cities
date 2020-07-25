import {reducer, ActionType, ActionCreator} from "./app-state";
import {extend} from "../../utils";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";

const getCityList = (index) => cities.map((it) => {
  if (it.title === cities[index].title) {
    return extend(it, {
      isActive: true,
    });
  }

  return extend(it, {
    isActive: false,
  });
});

const initialState = {
  city: cities[0],
  cities: getCityList(0),
  sortTypes: SORT_TYPES,
  activeOffer: null,
  sortType: SortType.POPULAR,
  sortIsOpen: false,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: cities[0],
    cities: getCityList(0),
    sortTypes: SORT_TYPES,
    activeOffer: null,
    sortType: SortType.POPULAR,
    sortIsOpen: false,
  });
});

it(`Reducer should change offer`, () => {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_OFFER,
    payload: offers[0],
  })).toEqual({
    city: cities[0],
    cities: getCityList(0),
    activeOffer: offers[0],
    sortTypes: SORT_TYPES,
    sortType: SortType.POPULAR,
    sortIsOpen: false,
  });

  expect(reducer(initialState, {
    type: ActionType.CHANGE_OFFER,
    payload: offers[1],
  })).toEqual({
    city: cities[0],
    cities: getCityList(0),
    activeOffer: offers[1],
    sortTypes: SORT_TYPES,
    sortType: SortType.POPULAR,
    sortIsOpen: false,
  });
});

it(`Reducer should change city`, () => {
  const citiesActive = getCityList(1);

  expect(reducer(initialState, {
    type: ActionType.CHANGE_CITY,
    payload: 1,
  })).toEqual({
    city: citiesActive[1],
    cities: getCityList(1),
    sortTypes: SORT_TYPES,
    activeOffer: null,
    sortType: SortType.POPULAR,
    sortIsOpen: false,
  });
});

it(`Reducer should open sort list`, function () {
  expect(reducer(initialState, {
    type: ActionType.OPEN_SORT_LIST,
    payload: true,
  })).toEqual({
    city: cities[0],
    cities: getCityList(0),
    sortTypes: SORT_TYPES,
    activeOffer: null,
    sortType: SortType.POPULAR,
    sortIsOpen: true,
  });
});

it(`Reducer should change sort type`, function () {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SortType.PRICE_UP,
  })).toEqual({
    city: cities[0],
    cities: getCityList(0),
    sortTypes: SORT_TYPES,
    activeOffer: null,
    sortType: SortType.PRICE_UP,
    sortIsOpen: false,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for Change active offer`, function () {
    expect(ActionCreator.changeActiveOffer(offers[0])).toEqual({
      type: ActionType.CHANGE_OFFER,
      payload: offers[0],
    });
  });

  it(`Action creator for Change city`, function () {
    expect(ActionCreator.changeCity(0)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: 0,
    });
  });

  it(`Action creator for open sort list`, function () {
    expect(ActionCreator.openSortList()).toEqual({
      type: ActionType.OPEN_SORT_LIST,
      payload: true,
    });
  });

  it(`Action creator for changeSortType`, function () {
    expect(ActionCreator.changeSortType(SortType.PRICE_DOWN)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortType.PRICE_DOWN,
    });
  });
});
