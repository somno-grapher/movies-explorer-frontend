// react vendor import
import React, { useState } from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'
import { onMoviesRequest } from '../../utils/moviesUtils.jsx';

// js import
import MoviesApi from '../../utils/MoviesApi.js';
import { MOVIES_API_BASE_PATH } from '../../consts/server.js';

// CSS import
import './Movies.css';

// main function
function Movies() {

  // useState
  const [moviesApi, setMoviesApi] = useState(new MoviesApi(MOVIES_API_BASE_PATH)); //TODO: change to ref?

  // functions

  function handleMoviesRequest() {
    onMoviesRequest(moviesApi);
  }

  // 2B rendered
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={handleMoviesRequest}
        />
        <Preloader />
        <MoviesCardList />
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
