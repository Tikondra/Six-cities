import React from "react";
import renderer from "react-test-renderer";
import FormSubmit from "./form-submit";

it(`should render FormSubmit`, function () {
  const tree = renderer
    .create(
        <FormSubmit isDisabled={true} isBlocked={false}/>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
