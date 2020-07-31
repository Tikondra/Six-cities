import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import NoFavorite from "./no-favorite";

it(`should render NoFavorite`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <NoFavorite/>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
