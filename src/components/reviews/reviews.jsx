import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {getSortingReviews} from "../../utils";
import {Format} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";
import NewReview from "../new-review/new-review.jsx";

const Reviews = ({reviews, status}) => {
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

Reviews.propTypes = {
  reviews: PropTypes.array,
  status: PropTypes.string.isRequired,
};

export default Reviews;
