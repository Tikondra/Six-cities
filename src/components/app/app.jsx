import React from "react";
import {connect} from "react-redux";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import history from '../../history.js';
import PropTypes from "prop-types";
import {AppRoute} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Favorite from "../favorite/favorite.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {getCity} from "../../reducer/app-state/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation} from "../../reducer/data/data";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getFavorites} from "../../reducer/data/selectors";

const App = (props) => {
  const {
    activeCity, authorizationStatus, favorites = [],
    onHoverPlace, onClickByHeader, onLogin, onClickByFavorite} = props;

  return <Router history={history}>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <PageMain
          status={authorizationStatus}
          onClickByHeader = {onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
        />
      </Route>
      <Route exact path={AppRoute.OFFER}>
        <Offer
          status={authorizationStatus}
          activeCity = {activeCity}
          onClickByHeader = {onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
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
        <Favorite
          favorites={favorites}
          status={authorizationStatus}
          onClickByHeader = {onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
        />
      </Route>
    </Switch>
  </Router>;
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  activeCity: PropTypes.object.isRequired,
  favorites: PropTypes.array,
  onLogin: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  activeCity: getCity(state),
  favorites: getFavorites(state),
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

  onClickByFavorite() {
    dispatch(Operation.postFavorite());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
