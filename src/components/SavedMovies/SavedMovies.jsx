// react vendor import
import React from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import MoviesContext from '../../contexts/moviesContext.js'

// CSS import
import './SavedMovies.css';

function SavedMovies() {
  return (
    <MoviesContext.Provider value="saved-movies">
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    </MoviesContext.Provider>
  );
}

export default SavedMovies;
