import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";
import {cities, offers} from "../../mocks/forTest";

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <PageMain
          offers = {offers}
          cities={cities}
          activeCity={cities[3]}
          onClickByHeader={jest.fn()}
          onHoverPlace={jest.fn()}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
