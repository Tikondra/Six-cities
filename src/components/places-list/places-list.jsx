import React from "react";
import PropTypes from "prop-types";
import Place from "../place/place.jsx";

const getPlaces = (places, onClickByHeader, onHoverPlace) => places.map((it) => {
  return <Place
    onClickByHeader={onClickByHeader}
    onHoverPlace = {onHoverPlace}
    offer = {it}
    key = {it.id}
  />;
});

const PlacesList = (props) => {
  const {offers, onClickByHeader, onHoverPlace, className} = props;

  return (
    <div className={className}>
      {getPlaces(offers, onClickByHeader, onHoverPlace)}
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
};

export default PlacesList;
