import * as React from "react";
import {Format} from "../../constants";

interface Props {
  isBlocked: boolean;
  rating: number;
  onChangeRating: (value: number) => void;
}

const FormRating: React.FC<Props> = ({isBlocked, rating, onChangeRating}) => (
  <div className="reviews__rating-form form__rating">
    {
      Format.STAR_VALUE.map((value) => (
        <React.Fragment key={value}>
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
        </React.Fragment>
      ))
    }
  </div>
);

export default FormRating;
