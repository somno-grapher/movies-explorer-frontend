// react vendor import
import React from 'react';

// react project import
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// CSS import
import './MoviesCard.css';

function MoviesCard({ cardData }) {

  // TODO: update
  const isLiked = Math.round(Math.random());

  return (
    <li className='movies-card'>
      <button
        type="button"
        className={`movies-card__like-button
        ${isLiked && "movies-card__like-button_liked"}`}
      //  onClick={handleDeleteClick}
      >
      </button>
      <div className='movies-card__image-container'>
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${cardData.image.url}`}
          alt={cardData.nameRU}
        //  onClick={handleCardClick}
        />
      </div>
      <div className="movies-card__info">
        <h2 className="movies-card__title">
          {cardData.nameRU}
        </h2>
        <p className="movies-card__duration">
          {cardData.duration}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
