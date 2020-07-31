import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import FavoriteLocation from "./favorite-location";
import {offers} from "../../mocks/for-test/offers";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render FavoriteLocation`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteLocation
            city={offers[0].city}
            places={offers}
            status={AuthorizationStatus.AUTH}
            onClickByFavorite={jest.fn}
            onHoverPlace={jest.fn}
            onClickByHeader={jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
