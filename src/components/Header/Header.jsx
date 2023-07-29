import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Header.css';

function Header({
  email,
  onSignOut
}) {

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoPath}
        alt="Логотип"
      />
      <div className="header__pivot">
        <Routes>
          <Route
            path="/"
            // path="/signin"
            element={
              <>
                <Link
                  className="header__regular-item"
                  to="/signup"
                >
                  Регистрация
                </Link>
                <Link
                  className="header__signin-item"
                  to="/signin"
                >
                  Войти
                </Link>
              </>}
          />
          {/* <Route
            path="/signup"
            element={
              <Link
                className="header__entry-link"
                to="/signin"
              >
                Войти
              </Link>}
          /> */}
        </Routes>
      </div>
      {/* <div className="header__details">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p
                  className="header__email"
                >
                  {`${email}`}
                </p>
                <Link
                  className="header__sign-out-link"
                  to="/signin"
                  onClick={onSignOut}
                >
                  Выйти
                </Link>
              </>
            }
          />
        </Routes>
      </div> */}
    </header>
  );
}

export default Header;
