import * as React from "react";
import * as renderer from "react-test-renderer";
import Places from "./places";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render Places`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Places
            status={AuthorizationStatus.AUTH}
            offers={offers}
            activeOffer={offers[0]}
            activeCity={cities[3]}
            sortTypes = {SORT_TYPES}
            sortType = {SortType.POPULAR}
            sortIsOpen = {false}
            onHoverPlace={jest.fn()}
            onClickByHeader={jest.fn()}
            onClickBySort={jest.fn()}
            onClickBySortType = {jest.fn()}
            onClickByFavorite = {jest.fn}
          />
        </BrowserRouter>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
