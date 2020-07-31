import * as React from "react";
import * as renderer from "react-test-renderer";
import Favorite from "./favorite";
import {AuthorizationStatus} from "../../reducer/user/user";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer/reducer";

const store = createStore(reducer);

it(`should render Favorite`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorite
              favorites={[]}
              status={AuthorizationStatus.AUTH}
              onClickByFavorite={jest.fn}
              onHoverPlace={jest.fn}
              onClickByHeader={jest.fn}
            />
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
