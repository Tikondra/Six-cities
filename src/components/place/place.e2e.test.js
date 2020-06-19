import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Place from "./place";
import {TypePlace} from "../../constants";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: `sdgdhhjh`,
  isPremium: true,
  price: 35,
  title: `Beautiful & luxurious apartment at great location`,
  type: TypePlace.APARTMENT,
  rating: 1.3,
  picture: `img/apartment-02.jpg`,
};

describe(`PlaceComponent`, () => {
  it(`should click by header`, function () {
    const onClickByHeader = jest.fn();

    const place = shallow(
        <Place
          onClickByHeader = {onClickByHeader}
          onHoverPlace={() => {}}
          offer = {offer}
        />
    );

    const header = place.find(`h2.place-card__name`);

    header.simulate(`click`);

    expect(onClickByHeader.mock.calls.length).toBe(1);
  });

  it(`should hover place`, function () {
    const onHoverPlace = jest.fn();

    const place = shallow(
        <Place
          onHoverPlace={onHoverPlace}
          offer = {offer}
          onClickByHeader={() => {}}/>
    );

    place.simulate(`mouseover`);

    expect(onHoverPlace.mock.calls.length).toBe(1);
  });
});
