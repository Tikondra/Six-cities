import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Place from "./place";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlaceComponent`, () => {
  it(`should click by header`, function () {
    const onClickByHeader = jest.fn();

    const place = shallow(
        <Place
          onClickByHeader = {onClickByHeader}
          title={`Wood and stone place`}
        />
    );

    const header = place.find(`h2.place-card__name`);

    header.simulate(`click`);

    expect(onClickByHeader.mock.calls.length).toBe(1);
  });
});
