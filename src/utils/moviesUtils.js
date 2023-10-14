const moviesKey = 'movies';
const keywordMoviesKey = 'keywordMovies';
const keywordShortMoviesKey = 'keywordShortMovies';
const moviesToShowKey = 'moviesToShow';

const keywordKey = 'keyword';
const isShortKey = 'isShort';

function onMoviesRequest(
  { moviesApi,
    setIsOnStandby,
    setMoviesToShow,
    setIsError,
    setMovies,
    keyword,
    setKeyword,
    setKeywordMovies,
    setKeywordShortMovies,
    movies,
    isShort,
    setIsNotFound,
    mainApi,
    setSavedMovies,
    isSavedMoviesReceived,
    setIsSavedMoviesReceived,
  }
) {
  setKeyword(keyword);

  if (!isSavedMoviesReceived) {
    setIsOnStandby(true);
    mainApi.getSavedMovies()
      .then((responseObject) => {
        setSavedMovies(responseObject);
        setIsSavedMoviesReceived(true);
        handleRequest();
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsOnStandby(false);
        return;
      })
  } else {
    handleRequest();
  }

  function handleRequest() {
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
  }

  // TODO: exclude localStorage
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
    setIsNotFound(moviesToShow.length ? false : true);

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

function onLikeClick({ mainApi, movie, setIsLiked, setSavedMovies, savedMovies, isLiked }) {
  // TODO: provide button inactivation while processing
  if (!isLiked) {
    mainApi.saveMovie({ movie })
      .then((responseObject) => {
        setSavedMovies([...savedMovies, responseObject]);
        setIsLiked(true);
      })
      .catch((error) => {
        console.log(error.message)
      })
  } else {
    const longId = savedMovies.find((savedMovie) => { return savedMovie.movieId === movie.id })._id;
    const shortId = movie.id;
    mainApi.deleteMovie({ id: longId })
      .then(() => {
        const index = savedMovies.findIndex((savedMovie) => {
          return shortId === savedMovie.movieId
        });
        savedMovies.splice(index, 1);
        setSavedMovies([...savedMovies]);
        setIsLiked(false);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
}

function onSavedMoviesMount({
  mainApi,
  setIsOnStandby,
  setSavedMovies,
  setMoviesToShow,
  setIsError,
  setIsNotFound,
}) {
  mainApi.getSavedMovies()
    .then((responseObject) => {
      setSavedMovies(responseObject);
      setMoviesToShow(responseObject);
      setIsNotFound(() => { return responseObject.length ? false : true });
    })
    .catch(() => {
      setIsError(true);
    })
    .finally(() => {
      setIsOnStandby(false);
    })
}

function onSavedMoviesRequest({
  keyword,
  setKeyword,
  isShort,
  setIsShort,
  savedMovies,
  setMoviesToShow,
  setIsNotFound,
}) {
  let keywordMovies;
  setKeyword(keyword);
  setIsShort(isShort);
  if (keyword) {
    keywordMovies = savedMovies.filter((savedMovie) => {
      return (savedMovie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || savedMovie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
    });
  } else {
    keywordMovies = savedMovies;
  }
  let moviesToShow;
  if (isShort) {
    moviesToShow = keywordMovies.filter(filterShortMoviesCallback);
  } else {
    moviesToShow = keywordMovies;
  }
  setIsNotFound(moviesToShow.length ? false : true);
  setMoviesToShow(moviesToShow);
}

function onDeleteClick({ mainApi, movie, setSavedMovies, savedMovies, }) {
  // TODO: provide button inactivation while processing
    const longId = movie._id;
    mainApi.deleteMovie({ id: longId })
      .then(() => {
        const index = savedMovies.findIndex((savedMovie) => {
          return longId === savedMovie._id;
        });
        savedMovies.splice(index, 1);
        setSavedMovies([...savedMovies]);
      })
      .catch((error) => {
        console.log(error.message)
      })
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
  setIsNotFoundOnMount,
  onLikeClick,
  onSavedMoviesMount,
  onSavedMoviesRequest,
  onDeleteClick,
};
