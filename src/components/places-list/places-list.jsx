import React from "react";
import PropTypes from "prop-types";
import Place from "../place/place.jsx";

const PlacesList = (props) => {
  const {
    status, offers, className, classNameCard, classCard, imgSize,
    onClickByHeader, onHoverPlace, onClickByFavorite
  } = props;

  return (
    <div className={className}>
      {offers.map((it) => {
        return <Place
          className={classNameCard}
          classCard = {classCard}
          imgSize = {imgSize}
          onClickByHeader={onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
          offer = {it}
          status={status}
          key = {it.id}
        />;
      })}
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  classNameCard: PropTypes.string.isRequired,
  classCard: PropTypes.string.isRequired,
  imgSize: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

export default PlacesList;
