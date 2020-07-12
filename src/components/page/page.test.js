import React from "react";
import renderer from "react-test-renderer";
import Page from "./page";
import {PageType} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";

const children = <div className="children-component" />;

describe(`Page component render correctly`, () => {
  it(`render with type PageType.MAIN`, function () {
    const tree = renderer
      .create(
          <Page
            type={PageType.MAIN}
            status={AuthorizationStatus.AUTH}
            userLogin={`Oliver.conner@gmail.com`}
          >
            {children}
          </Page>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render with type PageType.PROPERTY`, function () {
    const tree = renderer
      .create(
          <Page
            type={PageType.PROPERTY}
            status={AuthorizationStatus.AUTH}
            userLogin={`Oliver.conner@gmail.com`}
          >
            {children}
          </Page>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render with type PageType.SIGN_IN`, function () {
    const tree = renderer
      .create(
          <Page
            type={PageType.SIGN_IN}
            status={AuthorizationStatus.NO_AUTH}
          >
            {children}
          </Page>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
