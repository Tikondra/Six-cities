import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getCity} from "../app-state/selectors";

export const getPlaces = (state) => {
  return state[NameSpace.DATA].places;
};

export const getPlacesForCity = createSelector(
    getPlaces,
    getCity,
    (places, activeCity) => {
      return places.filter((place) => place.city === activeCity.title);
    }
);
