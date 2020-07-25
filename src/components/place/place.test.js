import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import Place from "./place";
import {offers} from "../../mocks/for-test/offers";

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Place
            onClickByHeader={() => {}}
            onHoverPlace={() => {}}
            offer = {offers[0]}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
