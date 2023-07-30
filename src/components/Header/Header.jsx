import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';

import logoPath from '../../images/logo/logo.svg';
import hamburgerPath from '../../images/icons/hamburger.svg';

// CSS import
import './Header.css';

function Header({
  email,
  onSignOut,
  isLoggedIn
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

      {!isLoggedIn && (
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

      {isLoggedIn &&
        <>
          <Navigation />
          <img src={hamburgerPath} alt="Бургер" className="header__hamburger" />
        </>
      }

    </header >
  );
}

export default Header;
