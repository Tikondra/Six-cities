import React from "react";
import PropTypes from "prop-types";
import Place from "../place/place.jsx";

const getPlaces = (status, places, onClickByHeader, onHoverPlace, onClickByFavorite) => places.map((it) => {
  return <Place
    onClickByHeader={onClickByHeader}
    onHoverPlace = {onHoverPlace}
    onClickByFavorite = {onClickByFavorite}
    offer = {it}
    status={status}
    key = {it.id}
  />;
});

const PlacesList = ({status, offers, onClickByHeader, onHoverPlace, className, onClickByFavorite}) => {
  return (
    <div className={className}>
      {getPlaces(status, offers, onClickByHeader, onHoverPlace, onClickByFavorite)}
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

export default PlacesList;
