// react vendor import
import React from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

// CSS import
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
