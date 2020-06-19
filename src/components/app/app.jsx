import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main.jsx";

const placeHeaderHandler = () => {};

const App = (props) => {
  const {offers} = props;

  return <PageMain
    offers = {offers}
    onClickByHeader = {placeHeaderHandler}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
