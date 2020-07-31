import * as React from "react";
import * as renderer from "react-test-renderer";
import {NewReview} from "./new-review";

it(`should render NewReview`, function () {
  const tree = renderer
    .create(
        <NewReview
          btnState={true}
          formState={false}
          rating={0}
          comment={``}
          error={false}
          onChangeRating={jest.fn}
          onChangeComment={jest.fn}
          onSubmitReview={jest.fn}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
