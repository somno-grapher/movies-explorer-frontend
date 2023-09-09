// react vendor import
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS import
import './NotFound.css';

function NotFound() {
  // utils

  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  // to be rendered
  return (
    <div className="not-found">
      <div className="not-found__container">
        <main className="not-found__main">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
        </main>
        <button
          className="not-found__go-back-button"
          onClick={goBack}
        >
          Назад
        </button>
      </div>
    </div>
  )
}

export default NotFound;
