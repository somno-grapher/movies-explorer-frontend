// react vendor import
import React, { useState, useEffect } from 'react';

// react project import
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import MoviesContext from '../../contexts/MoviesContext.jsx'
import Preloader from '../Preloader/Preloader.jsx';

import {
  onSavedMoviesMount,
  onSavedMoviesRequest,
} from '../../utils/moviesUtils.js';

// CSS import
import './SavedMovies.css';

function SavedMovies({ mainApi }) {

  const [isOnStandby, setIsOnStandby] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [keyword, setKeyword] = useState('');


  // TODO: get saved movies only once

  function handleSavedMoviesRequest(keyword) {
    onSavedMoviesRequest({
      keyword,
      isShort,
      savedMovies,
      setMoviesToShow,
      setIsNotFound,
    });
  }

  useEffect(() => {
    onSavedMoviesMount({
      mainApi,
      setIsOnStandby,
      setSavedMovies,
      setMoviesToShow,
      setIsError,
      setIsNotFound,
    })
  }, []);

  useEffect(() => {
    handleSavedMoviesRequest();
  }, [isShort]);

  return (
    <MoviesContext.Provider value="saved-movies">
      <main className="saved-movies">
        <SearchForm
          onSubmit={handleSavedMoviesRequest}
          onShortsSelectorClick={handleSavedMoviesRequest}
          keywordOnMount={''}
        // isShortOnMount={isShort}
        />
        {isOnStandby && (<Preloader />)}
        {
          isError && (
            <p className="saved-movies__error">
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
            </p>
          )
        }
        {
          isNotFound && (
            <p className="saved-movies__not-found">
              Ничего не найдено
            </p>
          )
        }
        {!isOnStandby && moviesToShow.length !== 0
          && (
            <MoviesCardList
              movies={moviesToShow}
            />
          )}
      </main>
    </MoviesContext.Provider>
  );
}

export default SavedMovies;
