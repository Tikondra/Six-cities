import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import {Format, PlacesListClass} from "../../constants";

const FavoriteLocation = ({city, places, status, onClickByHeader, onHoverPlace, onClickByFavorite}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <PlacesList
        offers={places}
        status={status}
        className={PlacesListClass.FAVORITE}
        classNameCard={PlacesListClass.FAVORITE_ARTICLE_NAME}
        classCard = {PlacesListClass.FAVORITE_CARD}
        imgSize = {Format.PLACE_IMG_SIZE.SMALL}
        onClickByHeader={onClickByHeader}
        onClickByFavorite={onClickByFavorite}
        onHoverPlace={onHoverPlace}
      />
    </li>
  );
};

FavoriteLocation.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
};

export default FavoriteLocation;
