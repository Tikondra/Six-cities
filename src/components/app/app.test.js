import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {SORT_TYPES, SortType} from "../../mocks/for-test/const";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {PageType} from "../../constants";

const mockStore = configureStore([]);

it(`should render App`, function () {
  const store = mockStore({
    city: cities[0],
    offers,
    cities,
    page: PageType.MAIN,
    activeOffer: offers[0],
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activePage={PageType.MAIN}
            activeCity={cities[0]}
            activeOffer={offers[0]}
            sortTypes = {SORT_TYPES}
            sortType = {SortType.POPULAR}
            sortIsOpen = {false}
            places={offers}
            cities={cities}
            onHoverPlace={jest.fn}
            onClickByHeader={jest.fn}
            onChangeCity={jest.fn}
            onClickBySort={jest.fn()}
            onClickBySortType = {jest.fn()}
          />
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
