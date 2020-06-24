import React from "react";
import renderer from "react-test-renderer";
import Page from "./page";
import {PageType} from "../../constants";

const children = <div className="children-component" />;

describe(`Page component render correctly`, () => {
  it(`render with type PageType.MAIN`, function () {
    const tree = renderer
      .create(
          <Page type={PageType.MAIN}>
            {children}
          </Page>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render with type PageType.PROPERTY`, function () {
    const tree = renderer
      .create(
          <Page type={PageType.PROPERTY}>
            {children}
          </Page>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
