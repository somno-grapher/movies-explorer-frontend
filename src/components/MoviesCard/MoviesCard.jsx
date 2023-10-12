// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCard.css';

function MoviesCard({
  movie
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
      <a className='movies-card__image-container'
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        //  onClick={handleCardClick}
        />
      </a>

      {/* info */}
      <div className="movies-card__info">
        <h2 className="movies-card__title">
          {movie.nameRU}
        </h2>
        <p className="movies-card__duration">
          {`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
        </p>
      </div>

    </li>
  );
}

export default MoviesCard;
