import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";
import {offers} from "../../mocks/forTest";

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <Offer
          offer={offers[0]}
          offers = {offers}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
