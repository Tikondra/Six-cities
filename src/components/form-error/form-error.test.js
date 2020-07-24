import React from "react";
import renderer from "react-test-renderer";
import FormError from "./form-error";

it(`should render FormError`, function () {
  const tree = renderer
    .create(
        <FormError/>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
