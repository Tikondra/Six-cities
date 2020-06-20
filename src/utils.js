export const getRating = (rating) => {
  return `${Math.round(rating) * 20}%`;
};
