import React from "react";
import {connect} from "react-redux";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import history from '../../history.js';
import PropTypes from "prop-types";
import {AppRoute} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {
  getCity, getCities, getActiveOffer,
  getSortIsOpen, getSortType,
  getSortTypes
} from "../../reducer/app-state/selectors";
import {getPlacesForCity} from "../../reducer/data/selectors";
import {getAuthorizationStatus, getUserLogin} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation} from "../../reducer/data/data";
import {AuthorizationStatus} from "../../reducer/user/user";

const App = (props) => {
  const {
    activeCity, activeOffer, sortTypes, sortType, sortIsOpen, places, cities, authorizationStatus, userLogin,
    onHoverPlace, onClickByHeader, onChangeCity, onClickBySort, onClickBySortType, onLogin
  } = props;

  return <Router history={history}>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <PageMain
          status={authorizationStatus}
          userLogin={userLogin}
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
      </Route>
      <Route exact path={AppRoute.OFFER}>
        <Offer
          status={authorizationStatus}
          userLogin={userLogin}
          activeCity = {activeCity}
          onClickByHeader = {onClickByHeader}
          onHoverPlace = {onHoverPlace}
        />;
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        {authorizationStatus === AuthorizationStatus.AUTH && <Redirect to={AppRoute.ROOT} />}
        <SignIn
          status={authorizationStatus}
          onLogin = {onLogin}
        />
      </Route>
      <Route exact path={AppRoute.FAVORITES}>
        {authorizationStatus !== AuthorizationStatus.AUTH && <Redirect to={AppRoute.LOGIN} />}
        <SignIn
          status={authorizationStatus}
          onLogin = {onLogin}
        />
      </Route>
    </Switch>
  </Router>;
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  userLogin: PropTypes.string,
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
  userLogin: getUserLogin(state),
  activeCity: getCity(state),
  activeOffer: getActiveOffer(state),
  sortTypes: getSortTypes(state),
  sortType: getSortType(state),
  sortIsOpen: getSortIsOpen(state),
  places: getPlacesForCity(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },

  onHoverPlace(offer) {
    dispatch(ActionCreator.changeActiveOffer(offer));
  },

  onClickByHeader(id) {
    dispatch(Operation.loadReviews(id));
    dispatch(Operation.loadNearbyPlaces(id));
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
