import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import Place from "./place";
import {offers} from "../../mocks/for-test/offers";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Format, PlacesListClass} from "../../constants";

it(`should render Place`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Place
            className={PlacesListClass.MAIN_ARTICLE_NAME}
            classCard = {PlacesListClass.MAIN_CARD}
            imgSize = {Format.PLACE_IMG_SIZE.NORMAL}
            onClickByHeader={jest.fn}
            onHoverPlace={jest.fn}
            onClickByFavorite = {jest.fn}
            offer = {offers[0]}
            status={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
