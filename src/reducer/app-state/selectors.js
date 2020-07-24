import NameSpace from "../name-space.js";

export const getCity = (state) => state[NameSpace.APP_STATE].city;

export const getCities = (state) => state[NameSpace.APP_STATE].cities;

export const getPage = (state) => state[NameSpace.APP_STATE].page;

export const getActiveOffer = (state) => state[NameSpace.APP_STATE].activeOffer;

export const getActivePlace = (state) => state[NameSpace.APP_STATE].activePlace;

export const getSortType = (state) => state[NameSpace.APP_STATE].sortType;

export const getSortIsOpen = (state) => state[NameSpace.APP_STATE].sortIsOpen;

export const getSortTypes = (state) => state[NameSpace.APP_STATE].sortTypes;
