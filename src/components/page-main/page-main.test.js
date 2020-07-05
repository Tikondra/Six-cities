import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";
import {cities, offers, SORT_TYPES, SortType} from "../../mocks/forTest";

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <PageMain
          offers = {offers}
          cities={cities}
          activeCity={cities[3]}
          sortTypes = {SORT_TYPES}
          sortType = {SortType.POPULAR}
          sortIsOpen = {false}
          onClickByHeader={jest.fn()}
          onHoverPlace={jest.fn()}
          onChangeCity={jest.fn}
          onClickBySort={jest.fn()}
          onClickBySortType = {jest.fn()}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
