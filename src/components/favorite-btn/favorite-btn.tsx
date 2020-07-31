import * as React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AuthStatus} from "../../types";

interface Props {
  size: {
    width: number;
    height: number;
  };
  type: string;
  isActive: boolean;
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByFavorite: () => void;
}

const FavoriteBtn: React.FC<Props> = ({status, type, size: {width, height}, isActive, onClickByFavorite}: Props) => {
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

export default FavoriteBtn;
