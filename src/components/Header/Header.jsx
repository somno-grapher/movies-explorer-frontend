// react vendor import
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react project import
import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';

// CSS import
import './Header.css';

function Header({
  email,
  onSignOut,
  isLoggedIn
}) {

  const location = useLocation();

  const [isNavigationOpen, setNavigationState] = useState(false);

  function openNavigation() {
    setNavigationState(true);
  }

  function closeNavigation() {
    setNavigationState(false);
  }

  return (

    <header
      className={location.pathname === '/' ? "header header_main" : "header"}>

      <Logo />

      {!isLoggedIn && (
        <nav className="header__unauthorized">
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
        </nav>)}

      {isLoggedIn &&
        <>
          <Navigation
            isOpen={isNavigationOpen}
            onClose={closeNavigation}
          />
          <button
            className="header__hamburger"
            type="button"
            onClick={openNavigation}
          />
        </>
      }

    </header >
  );
}

export default Header;
