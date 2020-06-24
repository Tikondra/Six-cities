import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Offer from "../offer/offer.jsx";
import {Page} from "../../constants";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
      activePage: Page.MAIN,
    };

    this.offers = props.offers;
    this.placeHoverHandler = this.placeHoverHandler.bind(this);
    this.placeClickHeaderHandler = this.placeClickHeaderHandler.bind(this);
  }

  placeHoverHandler({currentTarget: {id: offerId}}) {
    this.setState({
      activeOffer: this.offers.find((it) => it.id === offerId)
    });
  }

  placeClickHeaderHandler() {
    this.setState({
      activePage: Page.OFFER
    });
  }

  _renderScreen() {
    const {activePage} = this.state;

    switch (activePage) {
      case Page.MAIN:
        return <PageMain
          offers = {this.offers}
          onClickByHeader = {this.placeClickHeaderHandler}
          onHoverPlace = {this.placeHoverHandler}
        />;
      case Page.OFFER:
        return <Offer
          offer = {this.state.activeOffer}
        />;
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
            offer = {this.state.activeOffer}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
