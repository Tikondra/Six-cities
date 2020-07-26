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
  STAR_VALUE: [5, 4, 3, 2, 1],
  BOOKMARK_SIZE: {
    NORMAL: {
      width: 18,
      height: 19,
    },
    BIG: {
      width: 31,
      height: 33,
    }
  },
  BOOKMARK_TYPE: {
    PLACE: `place-card`,
    OFFER: `property`
  },
  PLACE_IMG_SIZE: {
    NORMAL: {
      width: 260,
      height: 210,
    },
    SMALL: {
      width: 150,
      height: 110,
    }
  }
};

export const PlacesListClass = {
  PROPERTY: `near-places__list places__list`,
  MAIN: `cities__places-list places__list tabs__content`,
  FAVORITE: `favorites__places`,
  MAIN_ARTICLE_NAME: `cities__place-card`,
  PROPERTY_ARTICLE_NAME: `near-places__card`,
  FAVORITE_ARTICLE_NAME: `favorites__card`,
  PROPERTY_CARD: `near-places`,
  MAIN_CARD: `cities`,
  FAVORITE_CARD: `favorites`
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
