// react vendor import
import React, { useState, useRef } from 'react';

// react project import
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// CSS import
import './SearchForm.css';

// images import
import searchIconPath from '../../images/icons/magnifier.svg';

function SearchForm({
  onSubmit,
  onShortsSelectorClick,
}) {
  // useState
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // refs
  const inputRef = useRef();

  // functions

  function handleInputChange(e) {
    setErrorMessage('');
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.validity.valid) {
      setErrorMessage('');
      onSubmit();
    } else {
      setErrorMessage('Нужно ввести ключевое слово');
    }
  }

  function handleShortsSelectorClick(status) {
    onShortsSelectorClick(status);
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
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            name="search-form-input"
            type="text"
            placeholder="Фильм"
            id="search-movie-input"
            className="search-form__input"
            required />
          <span className="search-form__input-error">{errorMessage}</span>
        </label>

        <button
          type="submit"
          className="search-form__submit-button">
        </button>

      </div>

      <div className="search-form__checkbox-area">
        <FilterCheckbox
          onClick={handleShortsSelectorClick}
        />
        <span>Короткометражки</span>
      </div>

    </form>

  );
}

export default SearchForm;
