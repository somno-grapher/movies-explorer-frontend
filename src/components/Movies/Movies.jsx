import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm.jsx';

import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Movies.css';

function Movies({
  email,
  onSignOut,
  isLoggedIn
}) {


  return (

    <main className="movies">
      <SearchForm/>
    </main>

  );
}

export default Movies;
