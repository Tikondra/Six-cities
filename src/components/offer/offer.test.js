import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";
import {offers} from "../../mocks/forTest";

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <Offer
          offer={offers[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
