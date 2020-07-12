import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";

it(`should render SignIn`, function () {
  const tree = renderer
    .create(
        <SignIn
          onLogin={jest.fn}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
