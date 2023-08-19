// react vendor import
import React from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

// CSS import
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
