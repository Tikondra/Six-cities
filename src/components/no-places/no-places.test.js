import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places";

it(`should render NoPlaces`, function () {
  const tree = renderer
    .create(
        <NoPlaces/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
