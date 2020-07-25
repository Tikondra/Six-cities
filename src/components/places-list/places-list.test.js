import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../mocks/for-test/offers";
import {PlacesListClass} from "../../constants";
import {BrowserRouter} from "react-router-dom";

it(`should render PlacesList`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesList
            className = {PlacesListClass.MAIN}
            offers={offers}
            onClickByHeader={jest.fn()}
            onHoverPlace={jest.fn()}/>
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
