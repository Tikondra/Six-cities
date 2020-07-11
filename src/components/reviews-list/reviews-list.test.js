import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/for-test/offers";
import ReviewsList from "./reviews-list";

it(`should render ReviewsList`, function () {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={offers[0].reviews}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
