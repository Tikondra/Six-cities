import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";
import {PlacesListClass, MapType} from "../../constants";

const Places = ({offers, activeCity, onClickByHeader, onHoverPlace}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.title}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
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
          city = {activeCity}
        />
      </div>
    </div>
  );
};

Places.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
};

export default Places;
