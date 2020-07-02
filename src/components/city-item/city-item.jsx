import React from "react";
import PropTypes from "prop-types";

const CityItem = ({city, isActive}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CityItem;
