// react vendor import
import React from 'react';

// CSS import
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <input className="filter-checkbox__input" type="checkbox" id="check" />
      <label for="check" className="filter-checkbox__label"></label>
    </>
  );
}

export default FilterCheckbox;
