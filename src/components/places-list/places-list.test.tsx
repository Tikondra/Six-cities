import * as React from "react";
import * as renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../mocks/for-test/offers";
import {Format, PlacesListClass} from "../../constants";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render PlacesList`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesList
            status={AuthorizationStatus.AUTH}
            className = {PlacesListClass.MAIN}
            classNameCard={PlacesListClass.MAIN_ARTICLE_NAME}
            classCard = {PlacesListClass.MAIN_CARD}
            imgSize = {Format.PLACE_IMG_SIZE.SMALL}
            offers={offers}
            onClickByHeader={jest.fn()}
            onHoverPlace={jest.fn()}
            onClickByFavorite = {jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
