import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";

it(`should render Sorting`, function () {
  const tree = renderer
    .create(
        <Sorting
          sortType={SortType.POPULAR}
          onClickBySort={jest.fn}
          sortTypes={SORT_TYPES}
          onClickBySortType={jest.fn}
          isOpen={false}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
