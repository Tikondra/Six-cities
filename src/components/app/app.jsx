import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Page from "../page/page.jsx";
import Offer from "../offer/offer.jsx";
import {ActionCreator} from "../../reducer.js";
import offers from "../../mocks/offers";

class App extends PureComponent {
  _renderScreen() {
    const {activePage, activeCity, activeOffer, offers, cities, onHoverPlace, onClickByHeader} = this.props;

    switch (activePage) {
      case PageType.MAIN:
        return (
          <Page type={activePage}>
            <PageMain
              offers = {offers}
              cities = {cities}
              onClickByHeader = {onClickByHeader}
              onHoverPlace = {onHoverPlace}
            />
          </Page>
        );
      case PageType.PROPERTY:
        return (
          <Page type={activePage}>
            <Offer
              offer = {activeOffer}
              offers = {offers}
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
            onClickByHeader = {() => {}}
            onHoverPlace = {() => {}}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  activePage: state.page,
  activeCity: state.city,
  activeOffer: state.activeOffer,
  offers: state.offers,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onHoverPlace(offer) {
    dispatch(ActionCreator.changeActiveOffer(offer));
  },

  onClickByHeader() {
    dispatch(ActionCreator.changePage());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
