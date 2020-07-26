import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import FavoriteList from "../favorite-list/favorite-list.jsx";
import NoFavorite from "../no-favorite/no-favorite.jsx";

const Favorite = ({favorites, status, onClickByFavorite, onHoverPlace, onClickByHeader}) => {
  const emptyClass = favorites.length === 0 ? `page--favorites-empty` : ``;

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

Favorite.propTypes = {
  favorites: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
};

export default Favorite;
