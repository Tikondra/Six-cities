export const getRating = (rating) => {
  return `${Math.round(rating) * 20}%`;
};

export const getSortingReviews = (reviews) => {
  const reviewsCopy = reviews.slice();

  return reviewsCopy.sort((a, b) => b.date - a.date);
};
