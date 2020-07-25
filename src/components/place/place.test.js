import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import Place from "./place";
import {offers} from "../../mocks/for-test/offers";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Place
            onClickByHeader={jest.fn}
            onHoverPlace={jest.fn}
            onClickByFavorite = {jest.fn}
            offer = {offers[0]}
            status={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
