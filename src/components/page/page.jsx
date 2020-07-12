import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import {AuthorizationStatus} from "../../reducer/user/user";

const getSignInOrUserMail = (status, userLogin, onClickBySignIn) => status === AuthorizationStatus.AUTH ?
  <span className="header__user-name user__name">{userLogin}</span> :
  <span className="header__login" onClick={onClickBySignIn}>Sign in</span>;

const Page = ({type, status, userLogin, onClickByLogo, onClickBySignIn, children}) => {
  return (
    <div className={`page page--gray page--${type}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" onClick={onClickByLogo}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {getSignInOrUserMail(status, userLogin, onClickBySignIn)}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
};

Page.propTypes = {
  type: PropTypes.oneOf(Object.values(PageType)).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  status: PropTypes.string.isRequired,
  userLogin: PropTypes.string,
  onClickByLogo: PropTypes.func,
  onClickBySignIn: PropTypes.func,
};

export default Page;
