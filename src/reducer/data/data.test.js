import {reducer, ActionType, Operation} from "./data.js";
import {offers as places} from "../../mocks/for-test/offers";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {serverPlaces} from "../../mocks/for-test/server-places";
import {localPlaces} from "../../mocks/for-test/localPlaces";

const api = createAPI(jest.fn);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    places: [],
    reviews: [],
    nearbyPlaces: [],
  });
});

it(`Reducer should update places by load offers`, () => {
  expect(reducer({
    places: [],
    reviews: [],
    nearbyPlaces: [],
  }, {
    type: ActionType.LOAD_PLACES,
    payload: places,
  })).toEqual({
    places,
    reviews: [],
    nearbyPlaces: [],
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadPlaces();

    apiMock
      .onGet(`/hotels`)
      .reply(200, serverPlaces);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PLACES,
          payload: localPlaces,
        });
      });
  });
});
