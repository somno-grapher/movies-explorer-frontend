function onMoviesRequest(
  api,
  updateErrorMessage,
  updateIsOnStanby,
  updateMovies,
) {
  const localStorageMovies = localStorage.getItem('movies');
  if (localStorageMovies) {
    updateMovies([...JSON.parse(localStorageMovies)]);
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
