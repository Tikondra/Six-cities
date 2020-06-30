import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/forTest";
import ReviewsItem from "./reviews-item";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <ReviewsItem
          review={offers[0].reviews[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
