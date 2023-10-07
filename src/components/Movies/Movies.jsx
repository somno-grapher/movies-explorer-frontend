// react vendor import
import React, { useEffect, useState } from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'

// js import
import MoviesApi from '../../utils/MoviesApi.js';
import { MOVIES_API_BASE_PATH } from '../../consts/consts.js';
import {
  onMoviesRequest,
  setMoviesOnMount,
  onShowMore,
  setMoviesToShowOnMount,
} from './moviesUtils.js';

// CSS import
import './Movies.css';

// main function
function Movies() {

  // useState
  const [moviesApi, setMoviesApi] = useState(new MoviesApi(MOVIES_API_BASE_PATH)); // TODO: change to ref?
  const [isOnStandby, setIsOnStandby] = useState(false);
  const [movies, setMovies] = useState(setMoviesOnMount());
  const [cardsShownQuantity, setCardsShownQuantity] = useState(0);
  const [moviesToShow, setMoviesToShow] = useState(setMoviesToShowOnMount());

  // useEffect

  // functions

  function handleMoviesRequest() {
    onMoviesRequest({
      moviesApi,
      updateErrorMessage: {},
      setIsOnStandby,
      setMovies,
      movies,
      moviesToShow,
      setMoviesToShow
    });
  }

  function handleShowMore() {
    onShowMore();
  }

  // 2B rendered
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={handleMoviesRequest}
        />
        {isOnStandby && (<Preloader />)}
        {!isOnStandby && moviesToShow.length !== 0
          && (<MoviesCardList
            movies={moviesToShow}
            onShowMore={handleShowMore}
          />)
        }
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
