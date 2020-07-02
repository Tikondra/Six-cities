import React from "react";
import PropTypes from "prop-types";

const CityItem = ({city, isActive}) => {
  const activeClass = isActive ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

export default CityItem;
