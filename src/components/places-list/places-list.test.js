import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../mocks/forTest";

it(`should render PlacesList`, function () {
  const tree = renderer
    .create(
        <PlacesList
          offers={offers}
          onClickByHeader={jest.fn()}
          onHoverPlace={jest.fn()}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
