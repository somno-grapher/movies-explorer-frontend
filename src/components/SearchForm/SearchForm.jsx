// react vendor import
import React from 'react';
import { useState } from "react";

// react project import
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// CSS import
import './SearchForm.css';

// images import
import searchIconPath from '../../images/icons/magnifier.svg';

function SearchForm({
  onSubmit,
}) {
  // useState
  const [input, setInput] = useState('');

  // functions

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  // 2B rendered
  return (

    <form
      name={`search-form`}
      className="search-form"
      // TODO provide js validation
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="search-form__upper-container">

        {/* TODO convert it into placeholder */}
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
            required />
          <span className="search-movie-input-error"></span>
        </label>

        <button
          type="submit"
          className="search-form__submit-button">
        </button>

      </div>

      <div className="search-form__checkbox-area">
        <FilterCheckbox />
        <span>Короткометражки</span>
      </div>

    </form>

  );
}

export default SearchForm;
