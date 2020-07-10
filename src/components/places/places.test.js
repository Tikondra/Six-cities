import React from "react";
import renderer from "react-test-renderer";
import Places from "./places";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";

it(`should render Places`, function () {
  const tree = renderer
    .create(
        <Places
          offers={offers}
          activeCity={cities[3]}
          sortTypes = {SORT_TYPES}
          sortType = {SortType.POPULAR}
          sortIsOpen = {false}
          onHoverPlace={jest.fn()}
          onClickByHeader={jest.fn()}
          onClickBySort={jest.fn()}
          onClickBySortType = {jest.fn()}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
