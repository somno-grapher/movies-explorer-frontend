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

// main function
export default function DialogInput({
  index,
  // TODO check if name and id is needed
  id,
  label,
  placeholder,
  initialValue = "",
  validationAttributes,
  disabledAttribute,
  validateFormInput
}) {

  // states
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isOnChangeTriggered, setIsOnChangeTriggered] = useState(false);

  // refs
  const inputRef = useRef();

  // functions
  function handleChange(e) {
    const input = e.target;
    setValue(input.value);
    setErrorMessage(input.validationMessage);
    setIsValid(input.validity.valid);
    setIsOnChangeTriggered(true);
    validateFormInput(index, input.validity.valid);
  }

  function styleAsInvalid() {
    return (!isValid
      && (isOnChangeTriggered || value !== "")
      && !disabledAttribute.disabled
    ) ? true : false
  }

  const isInvalidStyle = styleAsInvalid();

  // utils
  const styling = useContext(DialogStylingContext);

  useEffect(() => {
    const input = inputRef.current;
    setErrorMessage(input.validationMessage);
    setIsValid(input.validity.valid);
    validateFormInput(index, input.validity.valid);
  },
    []);

  useEffect(() => {
    setErrorMessage(inputRef.current.validationMessage);
  },
    [disabledAttribute]);

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
          ${isInvalidStyle && 'dialog-input__field_invalid'}`}
        ref={inputRef}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        {...validationAttributes}
        {...disabledAttribute}
        value={value}
      />

      {/* error */}
      <span className={`dialog-input__error
      dialog-input__error_styling_${styling}
      ${isInvalidStyle && 'dialog-input__error_visible'}
      ${id}-error`}>
        {errorMessage}
      </span>

    </div>
  );

}
