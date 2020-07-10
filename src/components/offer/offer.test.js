import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <Offer
          offer={offers[0]}
          offers = {offers}
          activeCity={cities[0]}
          onClickByHeader = {jest.fn()}
          onHoverPlace = {jest.fn()}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
