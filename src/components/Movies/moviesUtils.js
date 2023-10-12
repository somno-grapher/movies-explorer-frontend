const moviesKey = 'movies';
const keywordMoviesKey = 'keywordMovies';
const keywordShortMoviesKey = 'keywordShortMovies';
const moviesToShowKey = 'moviesToShow';

const keywordKey = 'keyword';
const isShortKey = 'isShort';

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
    isShort,
    setIsNotFound,
  }
) {
  setKeyword(keyword);
  if (!movies.length) {
    setIsOnStandby(true);
    moviesApi.getMovies()
      .then((responseObject) => {
        setMovies(responseObject); // no destructurizing
        localStorage.setItem(moviesKey, JSON.stringify(responseObject));
        handleSearch({ movies: responseObject, setIsNotFound });
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsOnStandby(false);
        return;
      });
  }
  if (movies.length) {
    handleSearch({ movies, setIsNotFound });
    return;
  }

  function handleSearch({ movies, setIsNotFound }) {
    const keywordMovies = movies.filter(checkMovieOnExpression);
    setKeywordMovies(keywordMovies);
    localStorage.setItem(keywordMoviesKey, JSON.stringify(keywordMovies));

    const keywordShortMovies = keywordMovies.filter(filterShortMoviesCallback);
    setKeywordShortMovies(keywordShortMovies);
    localStorage.setItem(keywordShortMoviesKey, JSON.stringify(keywordShortMovies));

    const moviesToShow = !isShort
      ? keywordMovies.slice(0, getInitialCardsQuantity())
      : keywordShortMovies.filter(checkMovieOnExpression).slice(0, getInitialCardsQuantity());
    setMoviesToShow([...moviesToShow]);
    localStorage.setItem(moviesToShowKey, JSON.stringify(moviesToShow));
    setIsNotFound(setIsNotFound = moviesToShow.length ? false : true);

    localStorage.setItem(keywordKey, keyword);
  }

  function checkMovieOnExpression(movie) {
    return (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase()));
  }
}

function setKeywordOnMount() {
  const keyword = localStorage.getItem(keywordKey);
  return keyword
    ? keyword
    : '';
}

function setMoviesOnMount() {
  const movies = localStorage.getItem(moviesKey);
  return movies
    ? JSON.parse(movies)
    : [];
}

function setKeywordMoviesOnMount() {
  const movies = localStorage.getItem(keywordMoviesKey);
  return movies
    ? JSON.parse(movies)
    : [];
}

function setKeywordShortMoviesOnMount() {
  const movies = localStorage.getItem(keywordShortMoviesKey);
  return movies
    ? JSON.parse(movies).filter(filterShortMoviesCallback)
    : [];
}

function setMoviesToShowOnMount() {
  const movies = localStorage.getItem(moviesToShowKey);
  return movies
    ? JSON.parse(movies)
    : [];
}

function setIsNotFoundOnMount({ movies, moviesToShow }) {
  return (!movies.length || moviesToShow.length) ? false : true;
}

function setIsShortOnMount() {
  const isShort = localStorage.getItem(isShortKey);
  return isShort
    ? JSON.parse(isShort)
    : false;
}

function onShowMore({
  moviesToShow,
  keywordMovies,
  keywordShortMovies,
  isShort,
  setMoviesToShow,
}) {
  let baseMovies;
  if (isShort) {
    baseMovies = keywordShortMovies;
  } else {
    baseMovies = keywordMovies;
  }
  const updatedMoviesToShow = baseMovies.slice(0, moviesToShow.length + getIncrement(moviesToShow.length));
  setMoviesToShow([...updatedMoviesToShow]);
  localStorage.setItem(moviesToShowKey, JSON.stringify(updatedMoviesToShow));
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
  // TODO: show additional row
  if (window.innerWidth > 768) {
    increment = 3 - currentCardsQuantity % 3;
  } else if (window.innerWidth > 520) {
    increment = 2 - currentCardsQuantity % 2;
  } else {
    increment = 2;
  };
  return increment;
}

function filterShortMoviesCallback(movie) {
  return movie.duration <= 40;
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

function filterOnIsShortChange({
  isShort,
  moviesToShow,
  keywordMovies,
  setMoviesToShow
}) {
  const moviesToShowLength = moviesToShow.length;
  if (!moviesToShowLength) { return };
  let updatedMoviesToShow;
  if (isShort) {
    updatedMoviesToShow = ([...moviesToShow.filter(filterShortMoviesCallback)]);
  } else {
    const lastShownCardId = moviesToShow[moviesToShowLength - 1].id;
    const numberOfMoviesToShow = keywordMovies.findIndex((movie) => { return movie.id === lastShownCardId }) + 1;
    updatedMoviesToShow = keywordMovies.slice(0, numberOfMoviesToShow);
  }
  setMoviesToShow(updatedMoviesToShow);
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
  filterOnIsShortChange,
  setIsNotFoundOnMount,
};
