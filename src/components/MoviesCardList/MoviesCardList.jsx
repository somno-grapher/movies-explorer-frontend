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
}) {

  // vars
  const moviesContext = useContext(MoviesContext);

  // functions
  function handleShowMore() {
    onShowMore();
  }

  // 2B rendered
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__grid">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          )
        })}
      </ul>
      <form className={`movies-card-list__controls
            ${moviesContext === "saved-movies" && "movies-card-list__controls_saved-movies"}`}>
        {moviesContext === "movies" &&
          <button type="button"
            className={`movies-card-list__more-button`}
            onClick={handleShowMore}
          >
            Ещё
          </button>
        }
      </form>
    </section>
  );
}

export default MoviesCardList;
