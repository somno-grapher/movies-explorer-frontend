import React from 'react';
import { Link } from 'react-router-dom';

// CSS import
import './Navigation.css';

function Navigation() {

  return (

    <div className="navigation">

      <nav className="navigation__navbar">
        <Link
          className="navigation__item navigation__item_type_main"
          to="/"
        >
          Главная
        </Link>
        <Link
          className="navigation__item navigation__item_type_movies"
          to="/movies"
        >
          Фильмы
        </Link>
        <Link
          className="navigation__item navigation__item_type_regular"
          to="/saved-movies"
        >
          Сохраненные фильмы
        </Link>
      </nav>

      <Link
        className="navigation__account"
        to="/profile"
      // onClick={onSignOut}
      >
        <p className="navigation__account-title">
          Аккаунт
        </p>
        <div className="navigation__account-icon"></div>
      </Link>

      {/* <Link
        className="navigation__sign-out-link"
        to="/signin"
        onClick={onSignOut}
      >
        Выйти
      </Link> */}

    </div>

  );
}

export default Navigation;
