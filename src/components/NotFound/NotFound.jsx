// react vendor import
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS import
import './NotFound.css';

function NotFound() {
  // utils

  const navigate = useNavigate();

  function goBack() {
    // { replace: true } does not work with -1
    navigate(-1);
  }

  // to be rendered
  return (
    <div className="not-found">
      {/* container is used for go-back-button positioning on wide screens */}
      <div className="not-found__container">
        <main className="not-found__main">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
        </main>
        <button
          className="not-found__go-back-button"
          type="button"
          onClick={goBack}
        >
          Назад
        </button>
      </div>
    </div>
  )
}

export default NotFound;
