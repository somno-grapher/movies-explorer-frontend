// react vendor import
import React from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'


// CSS import
import './Movies.css';

function Movies({ onSubmit }) {
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={onSubmit}
        />
        <MoviesCardList />
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
