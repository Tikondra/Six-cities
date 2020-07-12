import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews";
import {offers} from "../../mocks/for-test/offers";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render Reviews`, function () {
  const tree = renderer
    .create(
        <Reviews
          reviews={offers[0].reviews}
          status={AuthorizationStatus.AUTH}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
