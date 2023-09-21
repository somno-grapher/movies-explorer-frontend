// react vendor import
import React from 'react';

// CSS import
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="check" />
      <label for="check" className="filter-checkbox__label"></label>
    </div>
  );
}

export default FilterCheckbox;
