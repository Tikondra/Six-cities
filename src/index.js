import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {PLACES, Settings} from "./constants";

const init = () => {
  ReactDOM.render(
      <App
        placesCount = {Settings.COUNT_PLACES}
        places = {PLACES}
      />,
      document.querySelector(`#root`)
  );
};

init();
