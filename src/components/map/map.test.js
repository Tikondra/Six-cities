import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {offers} from "../../mocks/forTest";

it(`should render Map`, function () {
  const tree = renderer
    .create(
        <Map
          type = {`cities`}
          offers={offers}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
