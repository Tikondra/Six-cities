import * as React from "react";
import * as renderer from "react-test-renderer";
import CityList from "./city-list";
import {cities} from "../../mocks/for-test/cities";

it(`should render CityList`, function () {
  const tree = renderer
    .create(
        <CityList cities={cities} onChangeCity={jest.fn}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
