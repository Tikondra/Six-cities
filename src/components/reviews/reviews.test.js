import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";
import {offers} from "../../mocks/for-test/offers";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <Reviews
          reviews={offers[0].reviews}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
