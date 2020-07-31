import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import FavoriteBtn from "./favorite-btn";
import {Format, PlacesListClass} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";

it(`should render FavoriteBtn`, function () {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteBtn
            size={Format.PLACE_IMG_SIZE.NORMAL}
            type={PlacesListClass.MAIN_CARD}
            isActive={false}
            status={AuthorizationStatus.AUTH}
            onClickByFavorite={jest.fn}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
