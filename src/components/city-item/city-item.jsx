import React from "react";
import PropTypes from "prop-types";

const CityItem = ({city: {title, isActive}, index, onChangeCity}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeClass}`}
        href="#"
        onClick={() => onChangeCity(index)}
      >
        <span>{title}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CityItem;
