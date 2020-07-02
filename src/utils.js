export const getRating = (rating) => {
  return `${Math.round(rating) * 20}%`;
};

export const getSortingReviews = (reviews) => reviews.sort((a, b) => b.date - a.date);
