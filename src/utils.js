export const getRating = (rating) => `${Math.round(rating) * 20}%`;

export const getSortingReviews = (reviews) => reviews.sort((a, b) => b.date - a.date);

export const extend = (a, b) => Object.assign({}, a, b);

const getAllOffers = (offers) => offers;

export const sortByPriceLowToHigh = (offers) => offers.sort((a, b) => a.price - b.price);

export const sortByPriceHighToLow = (offers) => offers.sort((a, b) => b.price - a.price);

export const sortByRating = (offers) => offers.sort((a, b) => b.rating - a.rating);

const offersBySort = {
  "Popular": getAllOffers,
  "Price: low to high": sortByPriceLowToHigh,
  "Price: high to low": sortByPriceHighToLow,
  "Top rated first": sortByRating
};

export const getOffersBySort = (offers, sortType) => offersBySort[sortType](offers);
