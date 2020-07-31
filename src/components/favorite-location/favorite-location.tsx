import * as React from "react";
import PlacesList from "../places-list/places-list";
import {Format, PlacesListClass} from "../../constants";
import {AuthStatus, Offer} from "../../types";

interface Props {
  city: string;
  places: Offer[];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByFavorite: () => void;
  onHoverPlace: (offer: Offer) => void;
  onClickByHeader: (id: number) => void;
}

const FavoriteLocation: React.FC<Props> = (props: Props) => {
  const {city, places, status, onClickByHeader, onHoverPlace, onClickByFavorite} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <PlacesList
        offers={places}
        status={status}
        className={PlacesListClass.FAVORITE}
        classNameCard={PlacesListClass.FAVORITE_ARTICLE_NAME}
        classCard = {PlacesListClass.FAVORITE_CARD}
        imgSize = {Format.PLACE_IMG_SIZE.SMALL}
        onClickByHeader={onClickByHeader}
        onClickByFavorite={onClickByFavorite}
        onHoverPlace={onHoverPlace}
      />
    </li>
  );
};

export default FavoriteLocation;
