export const TypePlace = {
  APARTMENT: `Apartment`,
  ROOM: `Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const MapType = {
  MAIN: `cities`,
  PROPERTY: `property`
};

export const MapOption = {
  START_COORDINATE: [52.38333, 4.9],
  ICON_SIZE: [30, 30],
  ICON_SRC: `/img/pin.svg`,
  ICON_ACTIVE_SRC: `/img/pin-active.svg`,
  ZOOM: 12,
};

export const Format = {
  DATE_TIME: `YYYY-MM-DD`,
  REVIEW_DATE: `MMMM YYYY`,
  MAX_REVIEWS: 10,
  STAR_COUNT: 5,
  STAR_VALUE: [5, 4, 3, 2, 1]
};

export const PlacesListClass = {
  PROPERTY: `near-places__list places__list`,
  MAIN: `cities__places-list places__list tabs__content`,
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_UP: `Price: low to high`,
  PRICE_DOWN: `Price: high to low`,
  TOP_RATING: `Top rated first`
};

export const SORT_TYPES = Object.values(SortType);

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};
