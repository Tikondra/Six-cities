import * as React from "react";
import * as renderer from "react-test-renderer";
import Host from "./host";
import {offers} from "../../mocks/for-test/offers";

it(`should render Host`, function () {
  const tree = renderer
    .create(
        <Host host={offers[0].host} description={offers[0].description}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
