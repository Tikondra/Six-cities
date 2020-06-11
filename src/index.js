import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import {Settings} from "./constants";

const init = () => {
  ReactDOM.render(
      <App
        placesCount = {Settings.COUNT_PLACES}
      />,
      document.querySelector(`#root`)
  );
};

init();
