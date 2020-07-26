import React from "react";
import PropTypes from "prop-types";
import FavoriteLocation from "../favorite-location/favorite-location.jsx";

const FavoriteList = ({favorites, status, onClickByFavorite, onHoverPlace, onClickByHeader}) => {
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

FavoriteList.propTypes = {
  favorites: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
};

export default FavoriteList;
