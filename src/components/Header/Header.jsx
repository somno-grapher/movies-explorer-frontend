import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoPath from '../../images/logo/logo.svg';
import hamburgerPath from '../../images/icons/hamburger.svg';

// CSS import
import './Header.css';

function Header({
  email,
  onSignOut
}) {

  const location = useLocation();

  return (

    <header
      className={location.pathname === '/' ? "header header_main" : "header"}>
      <img
        className="header__logo"
        src={logoPath}
        alt="Логотип"
      />

      {location.pathname === "/" && (
        <div className="header__unauthorized">
          <Link
            className="header__item header__item_type_regular"
            to="/signup"
          >
            Регистрация
          </Link>
          <Link
            className="header__item header__item_type_signin"
            to="/signin"
          >
            Войти
          </Link>
        </div>)}

      {location.pathname === "/movies" && (
        <div className="header__authorized">

          <nav className="header__navbar">
            <Link
              className="header__item header__item_type_movies"
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className="header__item header__item_type_regular"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </nav>

          <Link
            className="header__account"
            to="/profile"
          // onClick={onSignOut}
          >
            <p className="header__account-title">
              Аккаунт
            </p>
            <div className="header__account-icon"></div>
          </Link>

          <img src={hamburgerPath} alt="Бургер" className="header__hamburger" />

          {/* <Link
                  className="header__sign-out-link"
                  to="/signin"
                  onClick={onSignOut}
                >
                  Выйти
                </Link> */}
        </div>



      )}

    </header >
  );
}

export default Header;
