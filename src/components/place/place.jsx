import React from "react";
import PropTypes from "prop-types";
import {TypePlace} from "../../constants";
import {getRating} from "../../utils";

const getPremium = (isPremium) => isPremium ?
  <div className="place-card__mark">
    <span>Premium</span>
  </div> :
  ``;

const Place = (props) => {
  const {offer, onClickByHeader, onHoverPlace} = props;
  const {id, isPremium, price, title, type, rating, picture} = offer;

  return <article
    className="cities__place-card place-card"
    onMouseOver={onHoverPlace}
    id={id}>
    {getPremium(isPremium)}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image"
          src={picture}
          width="260"
          height="200"
          alt={title} />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRating(rating)}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2
        onClick={onClickByHeader}
        className="place-card__name"
      >
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

Place.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(TypePlace)).isRequired,
    rating: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
};

export default Place;
