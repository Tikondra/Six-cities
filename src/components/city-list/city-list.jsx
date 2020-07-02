import React from "react";
import PropTypes from "prop-types";
import CityItem from "../city-item/city-item.jsx";
import {nanoid} from "nanoid";

const CityList = ({cities}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CityItem
              key={nanoid()}
              city = {city.title}
              isActive = {city.isActive}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CityList;
