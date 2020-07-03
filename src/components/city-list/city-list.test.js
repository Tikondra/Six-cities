import React from "react";
import renderer from "react-test-renderer";
import CityList from "./city-list";
import {cities} from "../../mocks/forTest";

it(`should render CityList`, function () {
  const tree = renderer
    .create(
        <CityList cities={cities} onChangeCity={jest.fn}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
