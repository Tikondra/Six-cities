import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import FavoriteList from "./favorite-list";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render FavoriteList`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteList
            favorites={[]}
            status={AuthorizationStatus.AUTH}
            onClickByFavorite={jest.fn}
            onHoverPlace={jest.fn}
            onClickByHeader={jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
