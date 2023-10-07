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
  onShowMore,
  setMoviesToShowOnMount,
  isShowMoreButtonDisplayed,
} from './moviesUtils.js';

// CSS import
import './Movies.css';

// main function
function Movies() {

  // useState
  const [moviesApi, setMoviesApi] = useState(new MoviesApi(MOVIES_API_BASE_PATH)); // TODO: change to ref?
  const [isOnStandby, setIsOnStandby] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(setMoviesToShowOnMount());
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  // useEffect

  // functions

  function handleMoviesRequest() {
    onMoviesRequest({
      moviesApi,
      updateErrorMessage: {},
      setIsOnStandby,
      moviesToShow,
      setMoviesToShow,
      setIsError
    });
  }

  function handleShowMore() {
    onShowMore({ moviesToShow, setMoviesToShow });
  }

  // 2B rendered
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={handleMoviesRequest}
        />
        {isOnStandby && (<Preloader />)}
        {isError && (
          <p className="movies__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}
        {isNotFound && (
          <p className="movies__not-found">
            Ничего не найдено
          </p>
        )}
        {!isOnStandby && moviesToShow.length !== 0
          && (<MoviesCardList
            movies={moviesToShow}
            onShowMore={handleShowMore}
            isShowMoreButtonDisplayed={isShowMoreButtonDisplayed(moviesToShow)}
          />)
        }
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
