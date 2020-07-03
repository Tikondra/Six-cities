import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";
import {cities, offers} from "../../mocks/forTest";

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
