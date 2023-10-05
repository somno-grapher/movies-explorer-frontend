// react vendor import
import React, { useEffect, useState } from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'
import { onMoviesRequest } from '../../utils/moviesUtils.jsx';

// js import
import MoviesApi from '../../utils/MoviesApi.js';
import { MOVIES_API_BASE_PATH } from '../../consts/consts.js';

// CSS import
import './Movies.css';

// main function
function Movies() {

  // useState
  const [moviesApi, setMoviesApi] = useState(new MoviesApi(MOVIES_API_BASE_PATH)); //TODO: change to ref?
  const [isOnStandby, setIsOnStandby] = useState(false);
  const [movies, setMovies] = useState([]);

  // useEffect

  // functions

  function handleMoviesRequest() {
    setIsOnStandby(true);
    onMoviesRequest(moviesApi, {}, setIsOnStandby, setMovies);
  }

  // 2B rendered
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={handleMoviesRequest}
        />
        {isOnStandby && (<Preloader />)}
        {(!isOnStandby && movies)
          && (<MoviesCardList
            movies={movies}
          />)
        }
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
