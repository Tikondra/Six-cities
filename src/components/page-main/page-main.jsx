import React from "react";
import PropTypes from "prop-types";
import CityList from "../city-list/city-list.jsx";
import Places from "../places/places.jsx";
import NoPlaces from "../no-places/no-places.jsx";

const PageMain = (props) => {
  const {offers, cities, activeCity, onClickByHeader, onHoverPlace, onChangeCity} = props;
  const emptyClass = offers.length === 0 ? `page__main--index-empty` : ``;

  return (
    <main className={`page__main page__main--index ${emptyClass}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CityList
        cities = {cities}
        onChangeCity = {onChangeCity}
      />
      <div className="cities">
        {offers.length > 0 ?
          <Places
            offers = {offers}
            activeCity = {activeCity}
            onClickByHeader = {onClickByHeader}
            onHoverPlace = {onHoverPlace}
          /> :
          <NoPlaces/>}
      </div>
    </main>
  );
};

PageMain.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default PageMain;
