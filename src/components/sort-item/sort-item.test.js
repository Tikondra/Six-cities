import React from "react";
import renderer from "react-test-renderer";
import SortItem from "./sort-item";
import {SortType} from "../../mocks/forTest";

it(`should render SortItem`, function () {
  const tree = renderer
    .create(
        <SortItem
          sortType={SortType.POPULAR}
          onClickBySortType={jest.fn}
          activeType={SortType.POPULAR}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
