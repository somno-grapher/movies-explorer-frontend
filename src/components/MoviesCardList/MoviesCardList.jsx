// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCardList.css';

function MoviesCardList({ movies }) {

  const moviesContext = useContext(MoviesContext);

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
            className={`movies-card-list__more-button`}>
            Ещё
          </button>
        }
      </form>
    </section>
  );
}

export default MoviesCardList;
