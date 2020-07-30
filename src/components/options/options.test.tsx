import * as React from "react";
import * as renderer from "react-test-renderer";
import Options from "./options";

it(`should render Options`, function () {
  const tree = renderer
    .create(
        <Options options={[`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`]}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
