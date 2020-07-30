import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from "../../reducer/user/user";
import {Header} from "./header";

it(`should render Header`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            status={AuthorizationStatus.AUTH}
            userLogin={`login@`}
            onLoadFavorites={jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
