// react vendor import
import React, { useState } from 'react';

// CSS import
import './FilterCheckbox.css';

function FilterCheckbox({
  onClick,
  isShortOnMount,
}) {

  const [status, setStatus] = useState(isShortOnMount);

  function handleClick(e) {
    setStatus(e.target.checked);
    onClick(e.target.checked);
  }

  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="check" onChange={handleClick} checked={status} />
      <label htmlFor="check" className="filter-checkbox__label"></label>
    </div>
  );
}

export default FilterCheckbox;
