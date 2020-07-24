import React from "react";
import renderer from "react-test-renderer";
import {Offer} from "./offer";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {AuthorizationStatus} from "../../reducer/user/user";
import {reviews} from "../../mocks/for-test/reviews";

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <Offer
          status={AuthorizationStatus.NO_AUTH}
          activePlace={offers[0]}
          offers = {offers}
          activeCity={cities[0]}
          onClickByHeader = {jest.fn()}
          onHoverPlace = {jest.fn()}
          reviews={reviews}
          nearbyPlaces={offers}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
