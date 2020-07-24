import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {reviews} from "../../mocks/for-test/reviews";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <ReviewsItem
          review={reviews[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
