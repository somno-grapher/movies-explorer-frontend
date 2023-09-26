// react vendor import
import React,
{
  useContext,
  useEffect,
  useState,
  useRef
}
  from "react";

// react project import
import DialogStylingContext from '../../contexts/dialogStylingContext.js'

// CSS import
import './DialogInput.css';

export default function DialogInput({
  // TODO check if name and id are needed
  id,
  label,
  placeholder,
  initialValue = "",
  validationAttributes,
  isDisabled
}) {

  // control input

  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isOnChangeTriggered, setIsOnChangeTriggered] = useState(false);

  const inputRef = useRef();

  function handleChange(e) {
    const input = e.target;
    setValue(input.value);
    setErrorMessage(input.validationMessage);
    setIsValid(input.validity.valid);
    setIsOnChangeTriggered(true);
  }

  function styleAsInvalid() {
    if (!isValid && (isOnChangeTriggered || value !== "")) {
      return true
    } else {
      return false
    }
  }

  // utils
  const styling = useContext(DialogStylingContext);

  useEffect(() => {
    setErrorMessage(inputRef.current.validationMessage);
    setIsValid(inputRef.current.validity.valid);
  },
    []);


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
          ${styleAsInvalid() && 'dialog-input__field_invalid'}`}
        ref={inputRef}
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
      ${styleAsInvalid() && 'dialog-input__error_visible'}
      ${id}-error`}>
        {errorMessage}
      </span>

    </div>
  );

}
