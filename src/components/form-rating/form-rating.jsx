import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Format} from "../../constants";

const FormRating = ({isBlocked, rating, onChangeRating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {
        new Array(Format.STAR_COUNT).fill(``).map((star, i) => {
          i++;

          return (
            <Fragment key={i}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={i}
                id={`${i}-stars`}
                type="radio"
                checked={rating === i}
                disabled={isBlocked}
                onChange={() => onChangeRating(i)}
              />
              <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          );
        }).sort((a, b) => {
          return b.key - a.key;
        })}
    </div>
  );
};

FormRating.propTypes = {
  isBlocked: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default FormRating;
