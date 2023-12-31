// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCardList.css';

// main function
function MoviesCardList({
  movies,
  onShowMore,
  isShowMoreButtonDisplayed,
  savedMovies,
  onLikeClick,
  onDeleteClick,
  isSavedMoviesNotation = false,
}) {

  // vars
  const moviesContext = useContext(MoviesContext);

  // functions
  function handleShowMore() {
    onShowMore();
  }

  function getMovieKey(movie, isSavedMoviesNotation) {
    return isSavedMoviesNotation ? movie._id : movie.id
  }

  // 2B rendered
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__grid">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={getMovieKey(movie, isSavedMoviesNotation)}
              movie={movie}
              savedMovies={savedMovies}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
            />
          )
        })}
      </ul>
      <form className={`movies-card-list__controls
            ${moviesContext === "saved-movies" && "movies-card-list__controls_saved-movies"}`}>
        {moviesContext === "movies" && isShowMoreButtonDisplayed
          && (
            <button type="button"
              className={`movies-card-list__more-button`}
              onClick={handleShowMore}
            >
              Ещё
            </button>)
        }
      </form>
    </section>
  );
}

export default MoviesCardList;
