// react vendor import
import { Link, NavLink } from 'react-router-dom';

// CSS import
import './Navigation.css';

function Navigation({
  isOpen,
  onClose
}) {

  const stateClass = isOpen ? 'navigation_opened' : '';

  return (
    <div className={`navigation ${stateClass}`}>
      <div className="navigation__pan">
        <nav className="navigation__navbar">
          <NavLink
            to="/"
            className={({ isActive }) => `navigation__item navigation__item_main ${isActive ? "navigation__item_active" : ""}`}
            onClick={onClose}
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => `navigation__item ${isActive ? "navigation__item_active" : ""}`}
            to="/movies"
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) => `navigation__item ${isActive ? "navigation__item_active" : ""}`}
            to="/saved-movies"
            onClick={onClose}
          >
            Сохраненные фильмы
          </NavLink>
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
      </div>
    </div>
  );
}

export default Navigation;
