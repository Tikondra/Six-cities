import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Page from "../page/page.jsx";
import Offer from "../offer/offer.jsx";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import offers from "../../mocks/offers";
import {Cities} from "../../mocks/const";
import {getCity, getCities, getActiveOffer, getPage, getSortIsOpen, getSortType, getSortTypes} from "../../reducer/app-state/selectors";
import {getPlacesForCity} from "../../reducer/data/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user.js";

class App extends PureComponent {
  _renderScreen() {
    const {activePage, activeCity, activeOffer, sortTypes, sortType, sortIsOpen, places, cities, onHoverPlace, onClickByHeader,
      onChangeCity, onClickBySort, onClickBySortType} = this.props;

    switch (activePage) {
      case PageType.MAIN:
        return (
          <Page type={activePage}>
            <PageMain
              offers = {places}
              cities = {cities}
              activeOffer = {activeOffer}
              activeCity = {activeCity}
              sortTypes = {sortTypes}
              sortType = {sortType}
              sortIsOpen = {sortIsOpen}
              onClickByHeader = {onClickByHeader}
              onHoverPlace = {onHoverPlace}
              onChangeCity = {onChangeCity}
              onClickBySort = {onClickBySort}
              onClickBySortType = {onClickBySortType}
            />
          </Page>
        );
      case PageType.PROPERTY:
        return (
          <Page type={activePage}>
            <Offer
              offer = {activeOffer}
              offers = {places}
              activeCity = {activeCity}
              onClickByHeader = {onClickByHeader}
              onHoverPlace = {onHoverPlace}
            />;
          </Page>
        );
      default:
        return null;
    }
  }

  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderScreen()}
        </Route>
        <Route exact path="/dev-offer">
          <Offer
            offer = {offers[0]}
            offers = {offers}
            activeCity = {Cities[0]}
            onClickByHeader = {() => {}}
            onHoverPlace = {() => {}}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  activePage: PropTypes.string.isRequired,
  activeCity: PropTypes.object.isRequired,
  activeOffer: PropTypes.object,
  sortTypes: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  sortIsOpen: PropTypes.bool.isRequired,
  places: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onClickBySort: PropTypes.func.isRequired,
  onClickBySortType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  activePage: getPage(state),
  activeCity: getCity(state),
  activeOffer: getActiveOffer(state),
  sortTypes: getSortTypes(state),
  sortType: getSortType(state),
  sortIsOpen: getSortIsOpen(state),
  places: getPlacesForCity(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onHoverPlace(offer) {
    dispatch(ActionCreator.changeActiveOffer(offer));
  },

  onClickByHeader() {
    dispatch(ActionCreator.changePage());
  },

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

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
