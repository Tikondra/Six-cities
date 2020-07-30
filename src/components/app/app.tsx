import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import history from '../../history.js';
import {AppRoute} from "../../constants";
import PageMain from "../page-main/page-main";
import Favorite from "../favorite/favorite";
import Offer from "../offer/offer";
import SignIn from "../sign-in/sign-in";
import {ActionCreator} from "../../reducer/app-state/app-state";
import {getCity} from "../../reducer/app-state/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation} from "../../reducer/data/data";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getFavorites} from "../../reducer/data/selectors";
import {Offer as OfferType, AuthStatus} from "../../types";

interface Props {
  authorizationStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  favorites: [];
  onLogin: ({login, password}: {login: string; password: string}) => void;
  onHoverPlace: (offer: OfferType) => void;
  onClickByHeader: (id: number) => void;
  onClickByFavorite: () => void;
}

const App: React.FC<Props> = (props) => {
  const {
    authorizationStatus, favorites = [],
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
        <Offer/>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        {authorizationStatus === AuthorizationStatus.AUTH && <Redirect to={AppRoute.ROOT} />}
        <SignIn
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
