import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {App} from "./app";
import {AuthorizationStatus} from "../../reducer/user/user";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

const store = createStore(reducer);

it(`should render App`, function () {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatus.AUTH}
            favorites={[]}
            onHoverPlace={jest.fn}
            onClickByHeader={jest.fn}
            onClickByFavorite = {jest.fn}
            onLogin={jest.fn}
          />
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
