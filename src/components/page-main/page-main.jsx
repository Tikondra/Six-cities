import React from "react";
import PropTypes from "prop-types";
import CityList from "../city-list/city-list.jsx";
import Places from "../places/places.jsx";
import NoPlaces from "../no-places/no-places.jsx";

const PageMain = (props) => {
  const {offers, cities, activeCity, sortTypes, sortType, sortIsOpen, onClickByHeader, onHoverPlace, onChangeCity,
    onClickBySort, onClickBySortType} = props;
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
            sortTypes = {sortTypes}
            sortType = {sortType}
            sortIsOpen = {sortIsOpen}
            onClickByHeader = {onClickByHeader}
            onHoverPlace = {onHoverPlace}
            onClickBySort={onClickBySort}
            onClickBySortType = {onClickBySortType}
          /> :
          <NoPlaces/>}
      </div>
    </main>
  );
};

PageMain.propTypes = {
  activeCity: PropTypes.object.isRequired,
  sortTypes: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  sortIsOpen: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onClickBySort: PropTypes.func.isRequired,
  onClickBySortType: PropTypes.func.isRequired,
};

export default PageMain;
