// react vendor import
import React, { useState, useContext } from "react";

// react project import
import DialogStylingContext from '../../contexts/dialogStylingContext.js'

// CSS import
import './DialogInput.css';

export default function DialogInput({
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

  // utils
  const styling = useContext(DialogStylingContext);

  // 2B rendered
  return (
    <div className={`dialog-input
    dialog-input_styling_${styling}`}>

      {/* label */}
      <label className={`dialog-input__label
        dialog-input__label_styling_${styling}`}>
        {label}
      </label>

      {/* field */}
      <input
        className={`dialog-input__field
          dialog-input__field_styling_${styling}`}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...validationAttributes}
      />

      {/* error */}
      <span className={`dialog-input__error
      dialog-input__error_styling_${styling}
      ${id}-error`}>
        {/* TODO: delete */}
        Error message
      </span>

    </div>
  );

}
