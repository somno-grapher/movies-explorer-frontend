// react import
import React from 'react';
import { useState } from "react";

import searchIconPath from '../../images/icons/magnifier.svg';


// CSS import
import './SearchForm.css';

function SearchForm({
  isOpen,
  // name,
  onClose,
  onSubmit,
  title,
  children
}) {

  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (

    <form
      name={`search-form`}
      className="search-form"
      // TODO provide js validation
      // noValidate
      onSubmit={onSubmit}
    >
      <div className="search-form__upper-container">

        <img
          src={searchIconPath}
          alt="Иконка поиска"
          className="search-form__icon"
        />

        <label className="search-form__input-label">
          <input
            value={input}
            onChange={handleInputChange}
            name="search-form-input"
            type="text"
            placeholder="Фильм"
            id="search-movie-input"
            className="search-form__input"
            // minLength="2"
            // maxLength="40"
            required />
          <span className="search-movie-input-error"></span>
        </label>

        <button
          type="submit"
          className="search-form__submit-button">
        </button>

      </div>

      <input type="checkbox">

      </input>

    </form>

  );
}

export default SearchForm;
