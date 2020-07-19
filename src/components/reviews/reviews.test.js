import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";
import {reviews} from "../../mocks/for-test/reviews";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <Reviews
          reviews={reviews}
          status={AuthorizationStatus.AUTH}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
