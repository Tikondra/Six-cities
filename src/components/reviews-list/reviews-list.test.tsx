import * as React from "react";
import * as renderer from "react-test-renderer";
import {reviews} from "../../mocks/for-test/reviews";
import ReviewsList from "./reviews-list";

it(`should render ReviewsList`, function () {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
