// react vendor import
import React from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import MoviesContext from '../../contexts/moviesContext.js'


// CSS import
import './Movies.css';

function Movies() {
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
