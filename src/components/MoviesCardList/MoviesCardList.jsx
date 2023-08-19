// react vendor import
import React from 'react';

// react project import
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import cardsData from './MoviesCardsData.js';

// CSS import
import './MoviesCardList.css';

function MoviesCardList() {

  return (
    <main className="movies-card-list">
      <ul className="movies-card-list__grid">
        {cardsData.map((cardData) => {
          return (
            <MoviesCard
              cardData={cardData}
            />
          )
        })}
      </ul>
      <form className="movies-card-list__controls">
        <button className="movies-card-list__more-button">
          Ещё
        </button>
      </form>
    </main>
  );
}

export default MoviesCardList;
