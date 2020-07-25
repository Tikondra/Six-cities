import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {AuthorizationStatus} from "../../reducer/user/user";
import {BrowserRouter} from "react-router-dom";

it(`should render SignIn`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignIn
            status={AuthorizationStatus.NO_AUTH}
            onLogin={jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
