function onMoviesRequest(
  api,
  updateErrorMessage,
  updateIsOnStanby,
  updateMovies,
  movies
) {
  if (movies.length !== 0) {
    updateMovies([...movies]);
  } else {
    updateIsOnStanby(true);
    api.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        updateMovies([...responseObject]);
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

export {
  onMoviesRequest,
  setMoviesOnMount,
};
