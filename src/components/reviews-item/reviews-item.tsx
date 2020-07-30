import * as React from "react";
import * as moment from "moment";
import {getRating} from "../../utils";
import {Format} from "../../constants";

interface Props {
  review: {
    author: string;
    avatar: string;
    rating: number;
    text: string;
    date: object;
  };
}

const ReviewsItem: React.FC<Props> = ({review: {author, avatar, rating, text, date}}: Props) => {
  const reviewDate = moment(date).format(Format.REVIEW_DATE);
  const dateTime = moment(date).format(Format.DATE_TIME);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54"
            alt={author} />
        </div>
        <span className="reviews__user-name">{author}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRating(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{reviewDate}</time>
      </div>
    </li>
  );
};

export default ReviewsItem;
