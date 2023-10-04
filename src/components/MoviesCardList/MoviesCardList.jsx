// react vendor import
import React, { useContext } from 'react';

// react project import
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import cardsData from './MoviesCardsData.js';
import MoviesContext from '../../contexts/MoviesContext.jsx'

// CSS import
import './MoviesCardList.css';

// TODO: update
const isLoading = false;

function MoviesCardList() {

  const moviesContext = useContext(MoviesContext);

  return (
    <section className="movies-card-list">
      {isLoading
        ?
        <Preloader />
        :
        <>
          <ul className="movies-card-list__grid">
            {cardsData.map((cardData, i) => {
              return (
                <MoviesCard
                  key={i}
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
    </section>
  );
}

export default MoviesCardList;
