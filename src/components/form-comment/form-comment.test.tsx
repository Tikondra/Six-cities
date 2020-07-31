import * as React from "react";
import * as renderer from "react-test-renderer";
import FormComment from "./form-comment";

it(`should render FormComment`, function () {
  const tree = renderer
    .create(
        <FormComment comment={``} isBlocked={false} onChangeComment={jest.fn}/>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
