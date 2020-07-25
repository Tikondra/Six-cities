import React from "react";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {Offer} from "./offer";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {AuthorizationStatus} from "../../reducer/user/user";
import {reviews} from "../../mocks/for-test/reviews";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../reducer/reducer";

const store = createStore(reducer);

it(`should render Offer`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Offer
              status={AuthorizationStatus.AUTH}
              activePlace={offers[0]}
              offers = {offers}
              activeCity={cities[0]}
              onClickByHeader = {jest.fn()}
              onHoverPlace = {jest.fn()}
              reviews={reviews}
              nearbyPlaces={offers}
            />
          </Provider>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
