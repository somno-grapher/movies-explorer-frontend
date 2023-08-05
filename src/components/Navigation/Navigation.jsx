// react vendor import
import { Link } from 'react-router-dom';

// CSS import
import './Navigation.css';

function Navigation({
  isOpen,
  onClose
}) {

  const stateClass = isOpen ? 'navigation_opened' : '';

  return (

    <div className={`navigation ${stateClass}`}>

      <nav className="navigation__navbar">
        <Link
          className="navigation__item navigation__item_type_main"
          to="/"
          onClick={onClose}
        >
          Главная
        </Link>
        <Link
          className="navigation__item navigation__item_type_movies"
          to="/movies"
          onClick={onClose}
        >
          Фильмы
        </Link>
        <Link
          className="navigation__item navigation__item_type_regular"
          to="/saved-movies"
          onClick={onClose}
        >
          Сохраненные фильмы
        </Link>
      </nav>

      <Link
        className="navigation__account"
        to="/profile"
        onClick={onClose}
      >
        <p className="navigation__account-title">
          Аккаунт
        </p>
        <div className="navigation__account-icon"></div>
      </Link>

      <button
        type="button"
        className="navigation__close-button"
        onClick={onClose}
      >
      </button>

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
