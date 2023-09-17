// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import cardsData from './MoviesCardsData.js';
import MoviesContext from '../../contexts/moviesContext.js'

// CSS import
import './MoviesCardList.css';

// TODO: update
const isLoading = false;

function MoviesCardList() {

  const moviesContext = useContext(MoviesContext);

  return (
    <main className="movies-card-list">
      {isLoading
        ?
        <Preloader />
        :
        <>
          <ul className="movies-card-list__grid">
            {cardsData.map((cardData) => {
              return (
                <MoviesCard
                  cardData={cardData}
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
        </>
      }
    </main>
  );
}

export default MoviesCardList;
