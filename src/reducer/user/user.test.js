import {reducer, ActionCreator, ActionType, AuthorizationStatus} from "./user.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status: AuthorizationStatus.AUTH, user: `Oliver.conner@gmail.com`},
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: `Oliver.conner@gmail.com`,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: `Oliver.conner@gmail.com`,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status: AuthorizationStatus.NO_AUTH, user: null},
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: `Oliver.conner@gmail.com`,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status: AuthorizationStatus.AUTH, user: `NoOliver.conner@gmail.com`},
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    user: `NoOliver.conner@gmail.com`,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status: AuthorizationStatus.NO_AUTH, user: null},
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {status: AuthorizationStatus.NO_AUTH, user: null},
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, `Oliver.conner@gmail.com`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {status: AuthorizationStatus.AUTH, user: `Oliver.conner@gmail.com`},
    });
  });
});
