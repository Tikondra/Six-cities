import * as React from "react";
import * as renderer from "react-test-renderer";
import Reviews from "./reviews";
import {reviews} from "../../mocks/for-test/reviews";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <Reviews
          reviews={reviews}
          status={AuthorizationStatus.NO_AUTH}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
