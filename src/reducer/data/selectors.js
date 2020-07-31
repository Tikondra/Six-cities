import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getCity, getSortType} from "../app-state/selectors";
import {getOffersBySort} from "../../utils";

export const getPlaces = (state) => state[NameSpace.DATA].places;

export const getPlacesForCity = createSelector(
    getPlaces,
    getCity,
    getSortType,
    (places, activeCity, sortType) => {
      const somePlaces = places.filter((place) => place.city === activeCity.title);

      return getOffersBySort(somePlaces, sortType);
    }
);

export const getPlaceForId = (state, id) => getPlaces(state).find((place) => place.id === id);

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getNearbyPlaces = (state) => state[NameSpace.DATA].nearbyPlaces;

export const getFavorites = (state) => state[NameSpace.DATA].favorites;
