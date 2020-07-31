import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import CityItem from "./city-item";
import {cities} from "../../mocks/for-test/cities";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`CityItem`, () => {
  it(`should click by title`, function () {
    const onChangeCity = jest.fn();

    const cityItem = shallow(
        <CityItem
          city={cities[0]}
          onChangeCity={onChangeCity}
          index={0}
        />
    );

    const title = cityItem.find(`.locations__item-link`);

    title.simulate(`click`);

    expect(onChangeCity.mock.calls.length).toBe(1);
  });
});
