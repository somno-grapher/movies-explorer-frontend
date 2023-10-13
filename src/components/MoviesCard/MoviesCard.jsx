// react vendor import
import React, { useContext, useState } from 'react';

// react project import
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCard.css';

function MoviesCard({
  movie,
  savedMovies,
  onLikeClick,
}) {

  const [isLiked, setIsLiked] = useState(() => {
    return savedMovies.some((savedMovie) => { return savedMovie.movieId === movie.id })
  });

  const moviesContext = useContext(MoviesContext);

  function handleLikeClick() {
    onLikeClick({ movie, setIsLiked });
  }

  return (
    <li className='movies-card'>

      {/* button */}
      {moviesContext === "movies"
        ?
        <button
          type="button"
          className={`movies-card__like-button
         ${isLiked && "movies-card__like-button_liked"}
        `}
          onClick={handleLikeClick}
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
