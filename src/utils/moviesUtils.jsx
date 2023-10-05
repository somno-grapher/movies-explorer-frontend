function onMoviesRequest(
  api,
  updateErrorMessage,
  updateIsOnStanby,
  setMovies,
) {
  api.getMovies()
    .then((responseObject) => {
      localStorage.setItem('movies', JSON.stringify(responseObject));
      setMovies([...responseObject]);
    })
    .catch(() => {
      console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      // updateErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    })
    .finally(() => { updateIsOnStanby(false); });
}

export { onMoviesRequest };
