function onMoviesRequest(
  api,
  updateErrorMessage,
  updateIsOnStanby,
  updateMovies,
  moviesToShow,
  updateMoviesToShow
) {
  if (moviesToShow.length !== 0) {
    updateMoviesToShow([...moviesToShow]);
  } else {
    updateIsOnStanby(true);
    api.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        updateMovies([...responseObject]);
        updateMoviesToShow([...responseObject]);
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

function onShowMore() {

}

export {
  onMoviesRequest,
  setMoviesOnMount,
  onShowMore
};
