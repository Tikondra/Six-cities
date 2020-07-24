import React from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";

const getPicture = (pictures, title) => pictures.map((it) => {
  return <div key={nanoid()} className="property__image-wrapper">
    <img className="property__image" src={it} alt={title} />
  </div>;
});

const OfferGallery = (props) => {
  const {pictures, title} = props;

  return <div className="property__gallery-container container">
    <div className="property__gallery">
      {getPicture(pictures.slice(0, 6), title)}
    </div>
  </div>;
};

OfferGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default OfferGallery;
