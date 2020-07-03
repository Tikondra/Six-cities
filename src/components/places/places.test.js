import React from "react";
import renderer from "react-test-renderer";
import Places from "./places";
import {cities, offers} from "../../mocks/forTest";

it(`should render Places`, function () {
  const tree = renderer
    .create(
        <Places
          offers={offers}
          activeCity={cities[3]}
          onHoverPlace={jest.fn()}
          onClickByHeader={jest.fn()}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
