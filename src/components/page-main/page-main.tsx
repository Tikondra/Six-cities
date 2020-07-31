import * as React from "react";
import CityList from "../city-list/city-list";
import Places from "../places/places";
import NoPlaces from "../no-places/no-places";
import Header from "../header/header";
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
import {AuthStatus, Offer} from "../../types";

interface IPageMainProps {
  activeCity: {
    title: string;
    coordinates: [];
  };
  activeOffer: Offer;
  sortTypes: [];
  sortType: string;
  sortIsOpen: boolean;
  offers: [Offer];
  cities: [];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByHeader: () => void;
  onHoverPlace: () => void;
  onChangeCity: () => void;
  onClickBySort: () => void;
  onClickBySortType: () => void;
  onClickByFavorite: () => void;
}

const PageMain: React.FC<IPageMainProps> = (props: IPageMainProps) => {
  const {
    offers, cities, activeCity, activeOffer, sortTypes, sortType, sortIsOpen, status,
    onClickByHeader, onHoverPlace, onChangeCity, onClickBySort, onClickBySortType, onClickByFavorite
  } = props;

  const emptyClass = Number(offers.length) === 0 ? `page__main--index-empty` : ``;

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
