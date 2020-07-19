export const createReviews = (data) => data.map((review) => {
  return {
    author: review.user.name,
    avatar: review.user.avatar_url,
    idAuthor: review.user.id,
    isPro: review.user.is_pro,
    rating: review.rating,
    text: review.comment,
    date: new Date(review.date),
    id: review.id,
  };
});
