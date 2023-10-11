const moviesToShowKey = 'moviesToShow';

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
    setKeywordShortMoviesOnMount,
    setKeywordMovies,
    setKeywordShortMovies,
    movies,
  }
) {
  setKeyword(keyword);
  if (movies.length === 0) {
    setIsOnStandby(true);
    moviesApi.getMovies()
      .then((responseObject) => {
        setMovies(responseObject); // no destructurizing
        localStorage.setItem('movies', JSON.stringify(movies));
        const keywordMovies = responseObject.filter(checkMovieOnExpression);
        setKeywordMovies(keywordMovies);
        const keywordShortMovies = keywordMovies.filter((movie) => {
          // ! change duration
          return movie.duration > 70;
        });
        setKeywordShortMovies(keywordShortMovies);
        const moviesToShow = keywordShortMovies.slice(0, getInitialCardsQuantity());
        setMoviesToShow([...moviesToShow]);
        localStorage.setItem('keyword', keyword);
        localStorage.setItem(moviesToShowKey, JSON.stringify(moviesToShow));
        console.log(moviesToShow)
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsOnStandby(false);
        return;
      });
    if (movies.length !== 0) {
      const moviesToShow = JSON.parse(localStorage.getItem(moviesToShowKey));
      console.log(moviesToShow)
      localStorage.setItem('keyword', keyword);
      setMoviesToShow([...moviesToShow]);
      localStorage.setItem(moviesToShowKey, JSON.stringify(moviesToShow));
      return;
    }
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

function setKeywordShortMoviesOnMount() {
  const movies = localStorage.getItem('keywordShortMovies');
  return movies
    ? JSON.parse(movies).filter(function (movie) {
      return movie.duration > 70; // TODO: update length
    })
    : [];
}

function setMoviesToShowOnMount() {
  const movies = localStorage.getItem(moviesToShowKey);
  const returnValue = movies
    ? JSON.parse(movies)
    : [];
  return returnValue;
}

function setIsShortOnMount() {
  const isShort = localStorage.getItem('isShort');
  return isShort
    ? JSON.parse(isShort)
    : false;
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

function isShowMoreButtonDisplayed({
  moviesToShow,
  keywordMovies,
  keywordShortMovies,
  isShort,
}) {
  const baseLength = !isShort ? keywordMovies.length : keywordShortMovies.length;
  return moviesToShow.length < baseLength;
}

export {
  onMoviesRequest,
  setMoviesToShowOnMount,
  onShowMore,
  isShowMoreButtonDisplayed,
  setMoviesOnMount,
  setKeywordMoviesOnMount,
  setKeywordOnMount,
  setIsShortOnMount,
  setKeywordShortMoviesOnMount,
};
