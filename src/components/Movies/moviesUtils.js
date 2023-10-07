function onMoviesRequest(
  { moviesApi,
    updateErrorMessage,
    setIsOnStandby,
    moviesToShow,
    setMoviesToShow,
    setIsError
  }
) {
  if (moviesToShow.length !== 0) {
    setMoviesToShow([...JSON.parse(localStorage.getItem('movies')).slice(0, getInitialCardsQuantity())]);
  } else {
    setIsOnStandby(true);
    moviesApi.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        setMoviesToShow([...responseObject].slice(0, getInitialCardsQuantity()));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => { setIsOnStandby(false); });
  }
}

function setMoviesToShowOnMount() {
  return localStorage.getItem('movies')
    ? JSON.parse(localStorage.getItem('movies')).slice(0, getInitialCardsQuantity())
    : [];
}

function onShowMore() {
}

function getInitialCardsQuantity() {
  let quantity;
  if (window.innerWidth > 768) {
    quantity = 12;
  } else if (window.innerWidth > 520) {
    quantity = 8;
  } else {
    quantity = 5;
  };
  return quantity;
}

export {
  onMoviesRequest,
  setMoviesToShowOnMount,
  onShowMore
};
