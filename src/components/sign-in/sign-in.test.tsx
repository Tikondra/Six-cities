import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";
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
              onLogin={jest.fn}
            />
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
