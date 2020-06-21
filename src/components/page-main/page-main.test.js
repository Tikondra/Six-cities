import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";
import {offers} from "../../mocks/forTest";

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <PageMain
          onClickByHeader={jest.fn()}
          onHoverPlace={jest.fn()}
          offers = {offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
