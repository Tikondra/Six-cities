import * as React from "react";
import ReviewsList from "../reviews-list/reviews-list";
import {getSortingReviews} from "../../utils";
import {Format} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";
import NewReview from "../new-review/new-review";
import {AuthStatus} from "../../types";

interface Props {
  reviews: [];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
}

const Reviews: React.FC<Props> = ({reviews, status}: Props) => {
  const sortingReviews = getSortingReviews(reviews).slice(0, Format.MAX_REVIEWS);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortingReviews.length}</span></h2>
      <ReviewsList
        reviews={sortingReviews}
      />
      {status === AuthorizationStatus.AUTH ? <NewReview/> : ``}
    </section>
  );
};

export default Reviews;
