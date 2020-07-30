import * as React from "react";
import {Format} from "../../constants";
import {getRating} from "../../utils";
import {Link} from "react-router-dom";
import FavoriteBtn from "../favorite-btn/favorite-btn";
import {AuthStatus, Offer} from "../../types";

interface Props {
  className: string;
  classCard: string;
  offer: Offer;
  imgSize: {
    width: number;
    height: number;
  };
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByHeader: (id: number) => void;
  onHoverPlace: (offer: Offer) => void;
  onClickByFavorite: () => void;
}

const getPremium = (isPremium) => isPremium ?
  <div className="place-card__mark">
    <span>Premium</span>
  </div> :
  ``;

const Place: React.FC<Props> = (props) => {
  const {offer, status, className, classCard, imgSize, onClickByHeader, onHoverPlace, onClickByFavorite} = props;
  const {id, isPremium, isFavorite, price, title, type, rating, picture} = offer;

  return <article
    className={`${className} place-card`}
    onMouseOver={() => onHoverPlace(offer)}
  >
    {getPremium(isPremium)}
    <div className={`${classCard}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image"
          src={picture}
          width={imgSize.width}
          height={imgSize.height}
          alt={title} />
      </a>
    </div>
    <div className={`${classCard}__card-info place-card__info`}>
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

export default Place;
