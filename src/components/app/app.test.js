import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {App} from "./app.jsx";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
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
            activeCity={cities[0]}
            activeOffer={offers[0]}
            sortTypes = {SORT_TYPES}
            sortType = {SortType.POPULAR}
            userLogin={`Oliver.conner@gmail.com`}
            sortIsOpen = {false}
            places={offers}
            cities={cities}
            onHoverPlace={jest.fn}
            onClickByHeader={jest.fn}
            onClickByLogo={jest.fn}
            onClickBySignIn={jest.fn}
            onChangeCity={jest.fn}
            onClickBySort={jest.fn()}
            onClickBySortType = {jest.fn()}
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
