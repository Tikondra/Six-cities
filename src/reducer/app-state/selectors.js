import NameSpace from "../name-space.js";

export const getCity = (state) => {
  return state[NameSpace.APP_STATE].city;
};

export const getCities = (state) => {
  return state[NameSpace.APP_STATE].cities;
};

export const getPage = (state) => {
  return state[NameSpace.APP_STATE].page;
};

export const getActiveOffer = (state) => {
  return state[NameSpace.APP_STATE].activeOffer;
};

export const getSortType = (state) => {
  return state[NameSpace.APP_STATE].sortType;
};

export const getSortIsOpen = (state) => {
  return state[NameSpace.APP_STATE].sortIsOpen;
};

export const getSortTypes = (state) => {
  return state[NameSpace.APP_STATE].sortTypes;
};
