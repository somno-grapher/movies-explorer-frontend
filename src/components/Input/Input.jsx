// react vendor import
import React, { useState } from "react";

// CSS import
import './Input.css';

function Input({
  id,
  title
}) {

  // *control input

  const [value, setValue] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
  }

  // TODO: delete
  // const x = "minLength";
  // const variableAttribute = false && { [x]: 2 };

  // *render component
  return (
    <label className={`entry__input`}>
      <p className={`entry__input-title`}>
        {title}
      </p>
      <input
        className={`entry__input-field`}
        type="email"
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        // TODO: delete
        // {...variableAttribute}
        required={true}
        // TODO: exclude placeholder
        placeholder="Placeholder" />
      <span className={`entry__input-error
      ${id}-error`}>
        {/* TODO: delete */}
        Error message
      </span>
    </label>
  );

}

export default Input;

