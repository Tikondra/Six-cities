import * as React from "react";
import {AppRoute} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserLogin} from "../../reducer/user/selectors";

interface IHeaderProps {
  status: string;
  userLogin: string;
  onLoadFavorites: () => void;
}

const Header: React.FC<IHeaderProps> = ({status, userLogin, onLoadFavorites}: IHeaderProps) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {status === AuthorizationStatus.AUTH ?
                <Link
                  to={AppRoute.FAVORITES}
                  className="header__nav-link header__nav-link--profile"
                  onClick={onLoadFavorites}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userLogin}</span>
                </Link> :
                <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  status: getAuthorizationStatus(state),
  userLogin: getUserLogin(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(Operation.loadFavorites());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
