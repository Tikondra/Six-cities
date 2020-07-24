import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Page from "../page/page.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import offers from "../../mocks/offers";
import {Cities} from "../../mocks/const";
import {
  getCity, getCities, getActiveOffer,
  getPage, getSortIsOpen, getSortType,
  getSortTypes, getActivePlace
} from "../../reducer/app-state/selectors";
import {getPlacesForCity} from "../../reducer/data/selectors";
import {getAuthorizationStatus, getUserLogin} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Operation} from "../../reducer/data/data";

class App extends PureComponent {
  _renderScreen() {
    const {activePage, activeCity, activeOffer, sortTypes, sortType, sortIsOpen, places, cities, onHoverPlace, onClickByHeader,
      onChangeCity, onClickBySort, onClickBySortType, authorizationStatus, onLogin, userLogin, onClickByLogo, onClickBySignIn} = this.props;

    switch (activePage) {
      case PageType.MAIN:
        return (
          <Page
            type={activePage}
            status={authorizationStatus}
            userLogin={userLogin}
            onClickBySignIn = {onClickBySignIn}
          >
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
          <Page
            type={activePage}
            status={authorizationStatus}
            userLogin={userLogin}
            onClickByLogo={onClickByLogo}
            onClickBySignIn = {onClickBySignIn}
          >
            <Offer
              activeCity = {activeCity}
              onClickByHeader = {onClickByHeader}
              onHoverPlace = {onHoverPlace}
            />;
          </Page>
        );
      case PageType.SIGN_IN:
        return (
          <Page
            type={PageType.SIGN_IN}
            status={authorizationStatus}
            onClickByLogo={onClickByLogo}
          >
            <SignIn
              onLogin = {onLogin}
            />
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
            offers = {offers}
            activeCity = {Cities[0]}
            onClickByHeader = {() => {}}
            onHoverPlace = {() => {}}
          />
        </Route>
        <Route exact path="/dev-sign-in">
          <Page
            type={PageType.SIGN_IN}
            status={AuthorizationStatus.NO_AUTH}
          >
            <SignIn
              onLogin={() => {}}
            />
          </Page>
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  userLogin: PropTypes.string,
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
  onClickByLogo: PropTypes.func.isRequired,
  onClickBySignIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userLogin: getUserLogin(state),
  activePage: getPage(state),
  activeCity: getCity(state),
  activeOffer: getActiveOffer(state),
  activePlace: getActivePlace(state),
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

  onClickByHeader(offer) {
    dispatch(ActionCreator.toPlace(offer));
    dispatch(Operation.loadReviews());
    dispatch(Operation.loadNearbyPlaces());
  },

  onClickByLogo() {
    dispatch(ActionCreator.toHome());
  },

  onClickBySignIn() {
    dispatch(ActionCreator.toSignIn());
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
