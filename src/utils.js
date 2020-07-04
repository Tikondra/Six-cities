export const getRating = (rating) => `${Math.round(rating) * 20}%`;

export const getSortingReviews = (reviews) => reviews.sort((a, b) => b.date - a.date);

export const extend = (a, b) => Object.assign({}, a, b);
