import React from "react";
import renderer from "react-test-renderer";
import Place from "./place";

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <Place
          onClickByHeader={() => {}}
          title={`Wood and stone place`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
