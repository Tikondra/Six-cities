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
  const {offers, onClickByHeader, onHoverPlace} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {getPlaces(offers, onClickByHeader, onHoverPlace)}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
};

export default PlacesList;
