import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter, Redirect} from 'react-router-dom';
import {Format, MapType, PlacesListClass, TypePlace} from "../../constants";
import OfferGallery from "../offer-gallery/offer-gallery.jsx";
import {getRating} from "../../utils";
import Options from "../options/options.jsx";
import Host from "../host/host.jsx";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import PlacesList from "../places-list/places-list.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getNearbyPlaces, getPlaceForId, getReviews} from "../../reducer/data/selectors";
import Header from "../header/header.jsx";
import FavoriteBtn from "../favorite-btn/favorite-btn.jsx";

const getPremium = (isPremium) => isPremium ?
  <div className="property__mark">
    <span>Premium</span>
  </div> :
  ``;

const Offer = ({
  offer, activeCity, status, reviews = [], nearbyPlaces = [],
  onClickByHeader, onHoverPlace, onClickByFavorite}) => {

  if (!offer) {
    return <Redirect to="/" />;
  }

  const {description, guests, host, isPremium, isFavorite, options, pictures, price, rating, room, title, type} = offer;

  return (
    <div className="page page--gray page--property">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery
            pictures = {pictures}
            title = {title}
          />
          <div className="property__container container">
            <div className="property__wrapper">
              {getPremium(isPremium)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <FavoriteBtn
                  status={status}
                  size={Format.BOOKMARK_SIZE.BIG}
                  type={Format.BOOKMARK_TYPE.OFFER}
                  isActive={isFavorite}
                  onClickByFavorite = {onClickByFavorite}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Options options={options}/>
              <Host
                host = {host}
                description = {description}
              />
              <Reviews
                reviews={reviews}
                status = {status}
              />
            </div>
          </div>
          <Map
            type = {MapType.PROPERTY}
            offers = {nearbyPlaces}
            activeOffer={offer}
            city = {activeCity}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              status={status}
              className = {PlacesListClass.PROPERTY}
              classNameCard={PlacesListClass.PROPERTY_ARTICLE_NAME}
              classCard = {PlacesListClass.PROPERTY_CARD}
              imgSize = {Format.PLACE_IMG_SIZE.NORMAL}
              offers={nearbyPlaces}
              onClickByHeader={onClickByHeader}
              onHoverPlace={onHoverPlace}
              onClickByFavorite = {onClickByFavorite}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(TypePlace)).isRequired,
    rating: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    room: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
  }),
  activeCity: PropTypes.object.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  reviews: PropTypes.array,
  nearbyPlaces: PropTypes.array,
};

const mapStateToProps = (state, {match}) => ({
  status: getAuthorizationStatus(state),
  offer: getPlaceForId(state, match.params.id),
  reviews: getReviews(state),
  nearbyPlaces: getNearbyPlaces(state),
});

export {Offer};
export default withRouter(connect(mapStateToProps)(Offer));
