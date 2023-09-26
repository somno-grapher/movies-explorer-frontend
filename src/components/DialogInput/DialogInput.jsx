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
  initialValue,
  validationAttributes,
  isDisabled
}) {

  // control input

  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const inputField = e.target;
    setValue(inputField.value);
    setErrorMessage(inputField.validationMessage);
    setIsValid(inputField.validity.valid);
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
          dialog-input__field_styling_${styling}
          ${!isValid && 'dialog-input__field_invalid'}`}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        {...validationAttributes}
        {...isDisabled}
        value={value}
      />

      {/* error */}
      <span className={`dialog-input__error
      dialog-input__error_styling_${styling}
      ${id}-error`}>
        {errorMessage}
      </span>

    </div>
  );

}
