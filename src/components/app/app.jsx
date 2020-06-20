import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";

const placeHeaderHandler = () => {};

const App = (props) => {
  const {offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PageMain
          offers = {offers}
          onClickByHeader = {placeHeaderHandler}
        />
      </Route>
      <Route exact path="/dev-property">
        <Property/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
