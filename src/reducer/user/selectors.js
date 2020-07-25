import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getUserLogin = (state) => state[NameSpace.USER].user;
