import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Place from "./place";
import {offers} from "../../mocks/forTest";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlaceComponent`, () => {
  it(`should click by header`, function () {
    const onClickByHeader = jest.fn();

    const place = shallow(
        <Place
          onClickByHeader = {onClickByHeader}
          onHoverPlace={jest.fn()}
          offer = {offers[0]}
        />
    );

    const header = place.find(`h2.place-card__name`);

    header.simulate(`click`);

    expect(onClickByHeader.mock.calls.length).toBe(1);
  });

  it(`should hover place`, function () {
    const placeHoverHandler = jest.fn();

    const place = shallow(
        <Place
          onHoverPlace={placeHoverHandler}
          offer = {offers[0]}
          onClickByHeader={jest.fn()}/>
    );

    place.simulate(`mouseover`);

    expect(placeHoverHandler.mock.calls.length).toBe(1);
  });
});
