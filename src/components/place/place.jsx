import React from "react";
import PropTypes from "prop-types";
import {Format, TypePlace} from "../../constants";
import {getRating} from "../../utils";
import {Link} from "react-router-dom";
import FavoriteBtn from "../favorite-btn/favorite-btn.jsx";

const getPremium = (isPremium) => isPremium ?
  <div className="place-card__mark">
    <span>Premium</span>
  </div> :
  ``;

const Place = (props) => {
  const {offer, status, onClickByHeader, onHoverPlace, onClickByFavorite} = props;
  const {id, isPremium, isFavorite, price, title, type, rating, picture} = offer;

  return <article
    className="cities__place-card place-card"
    onMouseOver={() => onHoverPlace(offer)}
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
        <FavoriteBtn
          status={status}
          size={Format.BOOKMARK_SIZE.NORMAL}
          type={Format.BOOKMARK_TYPE.PLACE}
          isActive={isFavorite}
          onClickByFavorite = {onClickByFavorite}
        />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRating(rating)}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2
        onClick={() => onClickByHeader(id)}
        className="place-card__name"
      >
        <Link to={{pathname: `/offer/${id}`}}>
          {title}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

Place.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(TypePlace)).isRequired,
    rating: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  status: PropTypes.string.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

export default Place;
