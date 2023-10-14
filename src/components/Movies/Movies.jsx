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
  setMoviesOnMount,
  setKeywordMoviesOnMount,
  setKeywordOnMount,
  setIsShortOnMount,
  setKeywordShortMoviesOnMount,
  setIsNotFoundOnMount,
  onLikeClick,
} from '../../utils/moviesUtils.js';

// CSS import
import './Movies.css';

// main function
function Movies({ mainApi }) {

  // useState
  const [moviesApi, setMoviesApi] = useState(new MoviesApi(MOVIES_API_BASE_PATH)); // TODO: change to ref?
  const [isOnStandby, setIsOnStandby] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShort, setIsShort] = useState(setIsShortOnMount());
  const [movies, setMovies] = useState(setMoviesOnMount());
  // TODO: exlude?
  const [keywordMovies, setKeywordMovies] = useState(setKeywordMoviesOnMount());
  const [keywordShortMovies, setKeywordShortMovies] = useState(setKeywordShortMoviesOnMount());
  const [moviesToShow, setMoviesToShow] = useState(setMoviesToShowOnMount());
  const [isNotFound, setIsNotFound] = useState(() => { return setIsNotFoundOnMount({ movies, moviesToShow }) });
  const [keyword, setKeyword] = useState(setKeywordOnMount());
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSavedMoviesReceived, setIsSavedMoviesReceived] = useState(false);

  // TODO: get saved movies only once

  // useEffect

  useEffect(() => {
    if (movies.length) {
      onMoviesRequest({
        moviesApi,
        setIsOnStandby,
        setMoviesToShow,
        setIsError,
        setMovies,
        keyword,
        setKeyword,
        setKeywordMovies,
        setKeywordShortMovies,
        movies,
        isShort,
        setIsNotFound,
        mainApi,
        setSavedMovies,
        isSavedMoviesReceived,
        setIsSavedMoviesReceived,
      });
    }
  }, [isShort]);

  // functions

  function handleMoviesRequest(keyword) {
    onMoviesRequest({
      moviesApi,
      setIsOnStandby,
      setMoviesToShow,
      setIsError,
      setMovies,
      keyword,
      setKeyword,
      setKeywordMovies,
      setKeywordShortMovies,
      movies,
      isShort,
      setIsNotFound,
      mainApi,
      setSavedMovies,
      isSavedMoviesReceived,
      setIsSavedMoviesReceived,
    });
  }

  function handleShowMore() {
    onShowMore({
      moviesToShow,
      keywordMovies,
      keywordShortMovies,
      isShort,
      setMoviesToShow,
    });
  }

  function handleLikeClick({ movie, setIsLiked, isLiked }) {
    onLikeClick({ mainApi, movie, setIsLiked, setSavedMovies, savedMovies, isLiked });
  }

  // 2B rendered
  return (
    <MoviesContext.Provider value="movies">
      <main className="movies">
        <SearchForm
          onSubmit={handleMoviesRequest}
          onShortsSelectorClick={setIsShort}
          keywordOnMount={keyword}
          isShortOnMount={isShort}
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
            isShowMoreButtonDisplayed={
              isShowMoreButtonDisplayed({
                moviesToShow,
                keywordMovies,
                keywordShortMovies,
                isShort
              })
            }
            savedMovies={savedMovies}
            onLikeClick={handleLikeClick}
          />)
        }
      </main>
    </MoviesContext.Provider>
  );
}

export default Movies;
