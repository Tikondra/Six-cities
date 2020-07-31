import * as React from "react";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import * as renderer from "react-test-renderer";
import {Offer} from "./offer";
import {BrowserRouter, Route} from "react-router-dom";
import reducer from "../../reducer/reducer";

const store = createStore(reducer);

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route component={Offer}/>
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
