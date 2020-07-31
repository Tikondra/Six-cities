import * as React from "react";
import FavoriteLocation from "../favorite-location/favorite-location";
import {AuthStatus, Offer} from "../../types";

interface Props {
  favorites: Offer[];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByFavorite: () => void;
  onHoverPlace: (offer: Offer) => void;
  onClickByHeader: (id: number) => void;
}

const FavoriteList: React.FC<Props> = ({favorites, status, onClickByFavorite, onHoverPlace, onClickByHeader}: Props) => {
  const locationList = [];

  favorites.map((favorite) => {
    if (!locationList.includes(favorite.city)) {
      locationList.push(favorite.city);
    }
  });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {locationList.map((city) => (
              <FavoriteLocation
                key = {city}
                city = {city}
                places = {favorites.filter((it) => it.city === city)}
                status = {status}
                onClickByHeader = {onClickByHeader}
                onHoverPlace = {onHoverPlace}
                onClickByFavorite = {onClickByFavorite}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoriteList;
