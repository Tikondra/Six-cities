import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`should render App`, function () {
  const tree = renderer
    .create(
        <App
          placesCount={512}
          places={[`Wood and stone place`]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
