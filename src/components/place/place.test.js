import React from "react";
import renderer from "react-test-renderer";
import Place from "./place";
import {TypePlace} from "../../constants";

const offer = {
  id: `sdgdhhjh`,
  isPremium: true,
  price: 35,
  title: `Beautiful & luxurious apartment at great location`,
  type: TypePlace.APARTMENT,
  rating: 1.3,
  picture: `img/apartment-02.jpg`,
};

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <Place
          onClickByHeader={() => {}}
          onHoverPlace={() => {}}
          offer = {offer}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
