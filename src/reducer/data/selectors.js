import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getCity} from "../app-state/selectors";

export const getPlaces = (state) => state[NameSpace.DATA].places;

export const getPlacesForCity = createSelector(
    getPlaces,
    getCity,
    (places, activeCity) => places.filter((place) => place.city === activeCity.title)
);

export const getPlaceForId = (state, id) => getPlaces(state).find((place) => place.id === id);

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getNearbyPlaces = (state) => state[NameSpace.DATA].nearbyPlaces;
