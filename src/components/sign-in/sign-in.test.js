import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {AuthorizationStatus} from "../../reducer/user/user";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

const store = createStore(reducer);

it(`should render SignIn`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <SignIn
              status={AuthorizationStatus.NO_AUTH}
              onLogin={jest.fn}
            />
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
