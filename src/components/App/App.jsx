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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [dialogErrorMessage, setDialogErrorMessage] = useState('');
  const [mainApi, setMainApi] = useState(new MainApi(MAIN_API_BASE_PATH));

  // useNavigate
  const navigate = useNavigate();

  // functions

  function handleRegister(
    email,
    password,
    name,
    updateErrorMessage
    // setFormValue
  ) {
    mainApi.register(email, password, name)
      .then(() => {
        // setFormValue({ email: '', password: '' });
        updateErrorMessage('');
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        updateErrorMessage(err.message);
      });
  }

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
                {/* TODO: use <Outlet /> for DRY */}
                <Header isLoggedIn={isLoggedIn} />
                <ProtectedRouteElement
                  element={Main}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <>
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
            element={<Login />}
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
                <Profile />
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
