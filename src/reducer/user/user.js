import {ActionCreator as ActionCreatorApp} from "../app-state/app-state";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status, user = null) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {status, user},
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((data) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data.data.email));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((data) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data.data.email));
        dispatch(ActionCreatorApp.toHome());
      });
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === ActionType.REQUIRED_AUTHORIZATION) {
    return Object.assign({}, state, {
      authorizationStatus: action.payload.status,
      user: action.payload.user,
    });
  }

  return state;
};

export {ActionCreator, ActionType, reducer, AuthorizationStatus, Operation};
