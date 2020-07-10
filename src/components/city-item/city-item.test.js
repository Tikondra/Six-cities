import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./city-item";
import {cities} from "../../mocks/for-test/cities";

it(`should render CityItem`, function () {
  const tree = renderer
    .create(
        <CityItem
          city={cities[0]}
          onChangeCity={jest.fn}
          index={0}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
