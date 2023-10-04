// react vendor import
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// react project import
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Footer from '../Footer/Footer.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

// js import
import MainApi from '../../utils/MainApi.js';
import { MAIN_API_BASE_PATH } from '../../consts/server.js';

// CSS import
import './App.css';

// main function
export default function App() {

  // useState
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [mainApi, setMainApi] = useState(new MainApi(MAIN_API_BASE_PATH)); //TODO: change to ref?

  // useNavigate
  const navigate = useNavigate();

  // functions

  function handleRegister(
    email,
    password,
    name,
    updateErrorMessage,
    updateIsOnStanby,
  ) {
    mainApi.register(email, password, name)
      .then(onSuccessfulTokenCheck)
      .catch((err) => {
        updateErrorMessage(err.message);
      })
      .finally(() => { updateIsOnStanby(false); });
  }

  function handleLogin(
    email,
    password,
    updateErrorMessage,
    updateIsOnStanby,
  ) {
    mainApi.login(email, password)
      .then(onSuccessfulTokenCheck)
      .catch((err) => {
        updateErrorMessage(err.message);
      })
      .finally(() => { updateIsOnStanby(false); });
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then(onSuccessfulTokenCheck)
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function onSuccessfulTokenCheck(responseObject) {
    setCurrentUser({
      ...currentUser,
      name: responseObject.name,
      email: responseObject.email,
    });
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    mainApi.setToken('');
    setIsLoggedIn(false);
    setCurrentUser({
      ...currentUser,
      name: '',
      email: '',
    });
    navigate('/', { replace: true }); // overridden in Profile
  }

  function handleUpdateUser(
    { name, email },
    updateErrorMessage,
    updateIsOnStanby,
    updateIsEditMode,
  ) {
    mainApi.updateUserInfo({ name, email })
      .then((responseObject) => {
        setCurrentUser({
          ...currentUser,
          name: responseObject.name,
          email: responseObject.email,
        });
        updateIsEditMode(false);
      })
      .catch((err) => {
        updateErrorMessage(err.message);
      })
      .finally(() => {
        updateIsOnStanby(false);
      });
  }

  // useEffect

  useEffect(() => {
    handleTokenCheck();
  },
    []);

  // 2B returned
  return (
    <CurrentUserContext.Provider value={currentUser}>

      {/* regular page */}

      <div className="app">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <>
                {/* TODO: use <Outlet /> for DRY */}
                {/* TODO: here and forth protect the entire route, not a particular component */}
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/signin"
            element={<Login
              onSubmit={handleLogin}
            />}
          />

          <Route
            path="/signup"
            element={<Register
              onSubmit={handleRegister}
            />}
          />
          <Route
            path="/profile"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  onLinkClick={handleSignOut}
                  onSubmit={handleUpdateUser}
                />
              </>
            }
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </div>

      {/* popups */}

      {/* TODO update */}
      {/* <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        infoTooltipData={infoTooltipData}
      /> */}

    </CurrentUserContext.Provider>
  );
}
