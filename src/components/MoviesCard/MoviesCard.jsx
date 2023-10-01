// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCard.css';

function MoviesCard({
  cardData
}) {

  const moviesContext = useContext(MoviesContext);

  // TODO: update
  const styles = [
    "movies-card__like-button_liked"
  ]

  return (
    <li className='movies-card'>

      {/* button */}
      {moviesContext === "movies"
        ?
        <button
          type="button"
          className={`movies-card__like-button
        // TODO update
         ${styles[Math.round(Math.random())]}
        `}
        //  onClick={handleLikeClick}
        >
        </button>
        :
        <button
          type="button"
          className={`movies-card__delete-button
        `}
        //  onClick={handleDeleteClick}
        >
        </button>
      }

      {/* image */}
      <div className='movies-card__image-container'>
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${cardData.image.url}`}
          alt={cardData.nameRU}
        //  onClick={handleCardClick}
        />
      </div>

      {/* info */}
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
