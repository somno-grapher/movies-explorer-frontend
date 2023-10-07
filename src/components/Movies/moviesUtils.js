function onMoviesRequest(
  { moviesApi,
    updateErrorMessage,
    setIsOnStandby,
    setMovies,
    movies,
    moviesToShow,
    setMoviesToShow }
) {
  if (moviesToShow.length !== 0) {
    setMoviesToShow([...moviesToShow.slice(0, 12)]);
  } else {
    setIsOnStandby(true);
    moviesApi.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        setMovies([...responseObject]);
        setMoviesToShow([...responseObject].slice(0, 12));
      })
      .catch(() => {
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        // updateErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => { setIsOnStandby(false); });
  }
}

function setMoviesOnMount() {
  return localStorage.getItem('movies')
    ? JSON.parse(localStorage.getItem('movies'))
    : [];
}

function setMoviesToShowOnMount() {
  return localStorage.getItem('movies')
    ? JSON.parse(localStorage.getItem('movies')).slice(0, 12)
    : [];
}

function onShowMore() {

}

export {
  onMoviesRequest,
  setMoviesOnMount,
  setMoviesToShowOnMount,
  onShowMore
};
