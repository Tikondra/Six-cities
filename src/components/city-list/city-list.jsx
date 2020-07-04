import React from "react";
import PropTypes from "prop-types";
import CityItem from "../city-item/city-item.jsx";
import {nanoid} from "nanoid";

const CityList = ({cities, onChangeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => (
            <CityItem
              key={nanoid()}
              city = {city}
              index = {i}
              onChangeCity = {onChangeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CityList;
