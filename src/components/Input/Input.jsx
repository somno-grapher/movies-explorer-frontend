// react vendor import
import React, { useState } from "react";

// CSS import
import './Input.css';

function Input({
  id,
  title,
  style
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
    <label className={`input
    input_style_${style}`}>
      <p className={`input__title
      input__title_style_${style}`}>
        {title}
      </p>
      <input
        className={`input__field
        input__field_style_${style}`}
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
      <span className={`input__error
      input__error_style_${style}
      ${id}-error`}>
        {/* TODO: delete */}
        Error message
      </span>
    </label>
  );

}

export default Input;

