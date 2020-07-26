import React from "react";
import PropTypes from "prop-types";
import CityList from "../city-list/city-list.jsx";
import Places from "../places/places.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import Header from "../header/header.jsx";
import {
  getActiveOffer,
  getCities,
  getCity,
  getSortIsOpen,
  getSortType,
  getSortTypes
} from "../../reducer/app-state/selectors";
import {getPlacesForCity} from "../../reducer/data/selectors";
import {ActionCreator} from "../../reducer/app-state/app-state";
import {connect} from "react-redux";

const PageMain = (props) => {
  const {
    offers, cities, activeCity, activeOffer, sortTypes, sortType, sortIsOpen, status,
    onClickByHeader, onHoverPlace, onChangeCity, onClickBySort, onClickBySortType, onClickByFavorite
  } = props;
  const emptyClass = offers.length === 0 ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${emptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList
          cities = {cities}
          onChangeCity = {onChangeCity}
        />
        <div className="cities">
          {offers.length > 0 ?
            <Places
              status={status}
              offers = {offers}
              activeCity = {activeCity}
              activeOffer = {activeOffer}
              sortTypes = {sortTypes}
              sortType = {sortType}
              sortIsOpen = {sortIsOpen}
              onClickByHeader = {onClickByHeader}
              onHoverPlace = {onHoverPlace}
              onClickBySort={onClickBySort}
              onClickBySortType = {onClickBySortType}
              onClickByFavorite = {onClickByFavorite}
            /> :
            <NoPlaces/>}
        </div>
      </main>
    </div>
  );
};

PageMain.propTypes = {
  activeCity: PropTypes.object.isRequired,
  activeOffer: PropTypes.object,
  sortTypes: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  sortIsOpen: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onClickBySort: PropTypes.func.isRequired,
  onClickBySortType: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getCity(state),
  activeOffer: getActiveOffer(state),
  sortTypes: getSortTypes(state),
  sortType: getSortType(state),
  sortIsOpen: getSortIsOpen(state),
  offers: getPlacesForCity(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(index) {
    dispatch(ActionCreator.changeCity(index));
  },

  onClickBySort() {
    dispatch(ActionCreator.openSortList());
  },

  onClickBySortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
