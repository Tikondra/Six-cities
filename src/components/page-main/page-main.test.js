import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <PageMain
          onClickByHeader={() => {}}
          placesCount={512}
          places={[`Wood and stone place`]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
