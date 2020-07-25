import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";
import {PlacesListClass, MapType} from "../../constants";
import Sorting from "../sorting/sorting.jsx";

const Places = ({
  offers, activeCity, activeOffer, sortTypes, sortType, sortIsOpen,
  onClickByHeader, onHoverPlace, onClickBySort, onClickBySortType}) => {

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.title}</b>
        <Sorting
          sortTypes = {sortTypes}
          sortType = {sortType}
          isOpen = {sortIsOpen}
          onClickBySort={onClickBySort}
          onClickBySortType = {onClickBySortType}
        />
        <PlacesList
          className = {PlacesListClass.MAIN}
          offers={offers}
          onClickByHeader={onClickByHeader}
          onHoverPlace = {onHoverPlace}
        />
      </section>
      <div className="cities__right-section">
        <Map
          type = {MapType.MAIN}
          offers = {offers}
          activeOffer = {activeOffer}
          city = {activeCity}
        />
      </div>
    </div>
  );
};

Places.propTypes = {
  sortTypes: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  sortIsOpen: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  activeOffer: PropTypes.object,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickBySort: PropTypes.func.isRequired,
  onClickBySortType: PropTypes.func.isRequired,
};

export default Places;
