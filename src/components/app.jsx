import React from "react";
import PropTypes from "prop-types";
import PageMain from "./page-main.jsx";
import {PLACES} from "../constants";

const App = (props) => {
  const {placesCount, places} = props;

  return <PageMain
    placesCount = {placesCount}
    places = {places}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.oneOf([PLACES]).isRequired
};

export default App;
