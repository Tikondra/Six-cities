import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";

const FavoriteBtn = ({status, type, size: {width, height}, isActive, onClickByFavorite}) => {
  const activeClass = isActive ? ` ${type}__bookmark-button--active` : ``;

  if (status === AuthorizationStatus.NO_AUTH) {
    return (
      <Link to={{pathname: `/login`}}>
        <button className={`${type}__bookmark-button button`} type="button">
          <svg className={`place-card__bookmark-icon`} width={width} height={height}>
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${type}__bookmark-button button${activeClass}`}
      type="button"
      onClick={onClickByFavorite}
    >
      <svg className={`place-card__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteBtn.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  onClickByFavorite: PropTypes.func.isRequired,
};

export default FavoriteBtn;
