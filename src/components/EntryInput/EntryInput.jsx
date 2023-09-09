// react vendor import
import React, { useState } from "react";

// CSS import
import './EntryInput.css';

export default function EntryInput({
  // TODO check if name and id are needed
  id,
  label,
  placeholder,
  validationAttributes
}) {

  // control input

  const [value, setValue] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
  }

  // to be rendered

  return (
    <div className={`entry-input`}>

      {/* label */}
      <label className={`entry-input__label`}>
        {label}
      </label>

      {/* field */}
      <input
        className={`entry-input__field`}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...validationAttributes}
      />

      {/* error */}
      <span className={`entry-input__error
      ${id}-error`}>
        {/* TODO: delete */}
        Error message
      </span>

    </div>
  );

}
