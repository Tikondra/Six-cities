import NameSpace from "../name-space";

export const getBntState = (state) => state[NameSpace.REVIEW].btnIsDisabled;

export const getFormState = (state) => state[NameSpace.REVIEW].formIsDisabled;

export const getRating = (state) => state[NameSpace.REVIEW].rating;

export const getComment = (state) => state[NameSpace.REVIEW].comment;

export const getError = (state) => state[NameSpace.REVIEW].error;
