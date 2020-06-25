import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import PageMain from "../page-main/page-main.jsx";
import Page from "../page/page.jsx";
import Offer from "../offer/offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
      activePage: PageType.MAIN,
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
      activePage: PageType.PROPERTY
    });
  }

  _renderScreen() {
    const {activePage} = this.state;

    switch (activePage) {
      case PageType.MAIN:
        return (
          <Page type={activePage}>
            <PageMain
              offers = {this.offers}
              onClickByHeader = {this.placeClickHeaderHandler}
              onHoverPlace = {this.placeHoverHandler}
            />
          </Page>
        );
      case PageType.PROPERTY:
        return (
          <Page type={activePage}>
            <Offer
              offer = {this.state.activeOffer}
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
