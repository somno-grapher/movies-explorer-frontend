function onMoviesRequest(
  { moviesApi,
    updateErrorMessage,
    setIsOnStandby,
    moviesToShow,
    setMoviesToShow,
    setIsError,
    setMovies,
    keyword,
    setKeyword,
  }
) {
  setKeyword(keyword);
  if (moviesToShow.length !== 0) {
    setMoviesToShow([...JSON.parse(localStorage.getItem('movies')).filter(checkMovieOnExpression).slice(0, getInitialCardsQuantity())]);
    localStorage.setItem('keyword', keyword);
  } else {
    setIsOnStandby(true);
    moviesApi.getMovies()
      .then((responseObject) => {
        localStorage.setItem('movies', JSON.stringify(responseObject));
        setMovies(responseObject); // no destructurizing
        setMoviesToShow([...responseObject.filter(checkMovieOnExpression).slice(0, getInitialCardsQuantity())]);
        localStorage.setItem('keyword', keyword);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => { setIsOnStandby(false); });
  }

  function checkMovieOnExpression(movie) {
    return (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase()));
  }
}

function setKeywordOnMount() {
  const keyword = localStorage.getItem('keyword');
  return keyword
    ? keyword
    : '';
}

function setMoviesOnMount() {
  const movies = localStorage.getItem('movies');
  return movies
    ? JSON.parse(movies)
    : [];
}

function setKeywordMoviesOnMount() {
  const movies = localStorage.getItem('keywordMovies');
  return movies
    ? JSON.parse(movies)
    : [];
}

function setMoviesToShowOnMount() {
  return localStorage.getItem('movies')
    ? JSON.parse(localStorage.getItem('movies')).slice(0, getInitialCardsQuantity())
    : [];
}

function onShowMore({ moviesToShow, setMoviesToShow }) {
  setMoviesToShow([...JSON.parse(localStorage.getItem('movies')).slice(0, moviesToShow.length + getIncrement(moviesToShow.length))]);
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

function getIncrement(currentCardsQuantity) {
  let increment;
  if (window.innerWidth > 768) {
    increment = 3 - currentCardsQuantity % 3;
  } else if (window.innerWidth > 520) {
    increment = 2 - currentCardsQuantity % 2;
  } else {
    increment = 2;
  };
  return increment;
}

function isShowMoreButtonDisplayed(moviesToShow) {
  return moviesToShow.length < JSON.parse(localStorage.getItem('movies')).length;
}

export {
  onMoviesRequest,
  setMoviesToShowOnMount,
  onShowMore,
  isShowMoreButtonDisplayed,
  setMoviesOnMount,
  setKeywordMoviesOnMount,
  setKeywordOnMount,
};
