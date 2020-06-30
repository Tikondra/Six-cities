import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import {nanoid} from "nanoid";

const getReview = (reviews) => reviews.map((it) => {
  return (
    <ReviewsItem
      key = {nanoid()}
      review = {it}
    />
  );
});

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {getReview(reviews)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewsList;
