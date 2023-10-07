function onMoviesRequest(
  api,
  updateErrorMessage,
  updateIsOnStanby,
  updateMovies,
  movies,
  moviesToShow,
  updateMoviesToShow
) {
  if (moviesToShow.length !== 0) {
    updateMoviesToShow([...moviesToShow.slice(0, 12)]);
  } else {
    updateIsOnStanby(true);
    api.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        updateMovies([...responseObject]);
        updateMoviesToShow([...responseObject].slice(0, 12));
      })
      .catch(() => {
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        // updateErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => { updateIsOnStanby(false); });
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
