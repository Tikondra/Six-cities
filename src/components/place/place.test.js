import React from "react";
import renderer from "react-test-renderer";
import Place from "./place";
import {offers} from "../../mocks/for-test/offers";

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <Place
          onClickByHeader={() => {}}
          onHoverPlace={() => {}}
          offer = {offers[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
