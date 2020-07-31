import * as React from "react";
import CityItem from "../city-item/city-item";
import {nanoid} from "nanoid";

interface ICityListProps {
  cities: [];
  onChangeCity: () => void;
}

const CityList: React.FC<ICityListProps> = ({cities, onChangeCity}: ICityListProps) => (
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

export default CityList;
