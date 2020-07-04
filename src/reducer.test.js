import {reducer, ActionType, ActionCreator} from "./reducer";
import {PageType} from "./constants";
import {offers as testOffers, cities} from "./mocks/forTest";
import {extend} from "./utils";
import offers from "./mocks/offers";

const someOffers = (activeCity) => testOffers.filter((offer) => offer.city === activeCity.title);
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
  offers: someOffers(cities[0]),
  cities: getCityList(0),
  page: PageType.MAIN,
  activeOffer: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: cities[0],
    offers: [offers[4]],
    cities: getCityList(0),
    page: PageType.MAIN,
    activeOffer: null,
  });
});

it(`Reducer should change page`, () => {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_PAGE,
    payload: PageType.PROPERTY,
  })).toEqual({
    city: cities[0],
    offers: someOffers(cities[0]),
    cities: getCityList(0),
    page: PageType.PROPERTY,
    activeOffer: null,
  });
});

it(`Reducer should change offer`, () => {
  expect(reducer(initialState, {
    type: ActionType.CHANGE_OFFER,
    payload: offers[0],
  })).toEqual({
    city: cities[0],
    offers: someOffers(cities[0]),
    cities: getCityList(0),
    page: PageType.MAIN,
    activeOffer: offers[0],
  });

  expect(reducer(initialState, {
    type: ActionType.CHANGE_OFFER,
    payload: offers[1],
  })).toEqual({
    city: cities[0],
    offers: someOffers(cities[0]),
    cities: getCityList(0),
    page: PageType.MAIN,
    activeOffer: offers[1],
  });
});

it(`Reducer should change city`, () => {
  const citiesActive = getCityList(1);

  expect(reducer(initialState, {
    type: ActionType.CHANGE_CITY,
    payload: 1,
  })).toEqual({
    city: citiesActive[1],
    offers: someOffers(cities[1]),
    cities: getCityList(1),
    page: PageType.MAIN,
    activeOffer: null,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for Change page`, function () {
    expect(ActionCreator.changePage()).toEqual({
      type: ActionType.CHANGE_PAGE,
      payload: PageType.PROPERTY,
    });
  });

  it(`Action creator for Change active offer`, function () {
    expect(ActionCreator.changeActiveOffer(testOffers[0])).toEqual({
      type: ActionType.CHANGE_OFFER,
      payload: testOffers[0],
    });
  });

  it(`Action creator for Change city`, function () {
    expect(ActionCreator.changeCity(0)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: 0,
    });
  });
});
