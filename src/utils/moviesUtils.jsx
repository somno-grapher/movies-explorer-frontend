function onMoviesRequest(api, updateErrorMessage, updateIsOnStanby) {
  api.getMovies()
    .then((responseObject) => {
      console.log(responseObject);
      localStorage.setItem('movies', responseObject);
    })
    .catch(() => {
      console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      // updateErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    })
    .finally(() => { updateIsOnStanby(false); });
}

export { onMoviesRequest };
