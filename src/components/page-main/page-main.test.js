import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {AuthorizationStatus} from "../../reducer/user/user";
import {BrowserRouter} from "react-router-dom";

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PageMain
            status={AuthorizationStatus.AUTH}
            userLogin={`Riki`}
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
          />
        </BrowserRouter>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
