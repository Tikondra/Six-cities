import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Format} from "../../constants";

const FormRating = ({isBlocked, rating, onChangeRating}) => (
  <div className="reviews__rating-form form__rating">
    {
      Format.STAR_VALUE.map((value) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={value}
            id={`${value}-stars`}
            type="radio"
            checked={rating === value}
            disabled={isBlocked}
            onChange={() => onChangeRating(value)}
          />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </Fragment>
      ))
    }
  </div>
);

FormRating.propTypes = {
  isBlocked: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default FormRating;
