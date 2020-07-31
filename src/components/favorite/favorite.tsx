import * as React from "react";
import Header from "../header/header";
import FavoriteList from "../favorite-list/favorite-list";
import NoFavorite from "../no-favorite/no-favorite";
import {AuthStatus, Offer} from "../../types";

interface IFavoriteProps {
  favorites: Offer[];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByFavorite: () => void;
  onHoverPlace: (offer: Offer) => void;
  onClickByHeader: (id: number) => void;
}

const Favorite: React.FC<IFavoriteProps> = ({favorites, status, onClickByFavorite, onHoverPlace, onClickByHeader}: IFavoriteProps) => {
  const emptyList: number = 0;
  const emptyClass: string = Number(favorites.length) === emptyList ? `page--favorites-empty` : ``;

  return (
    <div className={`page ${emptyClass}`}>
      <Header/>
      {favorites.length > 0 ?
        <FavoriteList
          favorites = {favorites}
          status = {status}
          onClickByHeader = {onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
        /> :
        <NoFavorite/>
      }
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

export default Favorite;
