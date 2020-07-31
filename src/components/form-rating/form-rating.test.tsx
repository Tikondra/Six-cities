import * as React from "react";
import * as renderer from "react-test-renderer";
import FormRating from "./form-rating";

it(`should render FormRating`, function () {
  const tree = renderer
    .create(
        <FormRating rating={0} isBlocked={false} onChangeRating={jest.fn}/>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
