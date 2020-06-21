import React from "react";
import renderer from "react-test-renderer";
import Host from "./host";
import {offers} from "../../mocks/forTest";

it(`should render Host`, function () {
  const tree = renderer
    .create(
        <Host host={offers[0].host} description={offers[0].description}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
