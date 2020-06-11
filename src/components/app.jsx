import React from "react";
import PageMain from "./page-main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesCount} = props;

  return <PageMain
    placesCount = {placesCount}
  />;
};

export default App;
