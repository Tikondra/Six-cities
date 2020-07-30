import * as React from "react";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Place from "./place";
import {offers} from "../../mocks/for-test/offers";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Format, PlacesListClass} from "../../constants";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlaceComponent`, () => {
  it(`should click by header`, function () {
    const onClickByHeader = jest.fn();

    const place = shallow(
        <Place
          className={PlacesListClass.MAIN_ARTICLE_NAME}
          classCard = {PlacesListClass.MAIN_CARD}
          imgSize = {Format.PLACE_IMG_SIZE.NORMAL}
          onClickByHeader = {onClickByHeader}
          onClickByFavorite = {jest.fn}
          onHoverPlace={jest.fn()}
          offer = {offers[0]}
          status={AuthorizationStatus.AUTH}
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
          className={PlacesListClass.MAIN_ARTICLE_NAME}
          classCard = {PlacesListClass.MAIN_CARD}
          imgSize = {Format.PLACE_IMG_SIZE.NORMAL}
          onHoverPlace={placeHoverHandler}
          onClickByFavorite = {jest.fn}
          status={AuthorizationStatus.AUTH}
          offer = {offers[0]}
          onClickByHeader={jest.fn()}/>
    );

    place.simulate(`mouseover`);

    expect(placeHoverHandler.mock.calls.length).toBe(1);
  });
});
