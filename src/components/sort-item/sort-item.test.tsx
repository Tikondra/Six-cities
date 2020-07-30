import * as React from "react";
import * as renderer from "react-test-renderer";
import SortItem from "./sort-item";
import {SortType} from "../../mocks/for-test/const";

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
