// react vendor import
import React,
{
  useContext,
  useEffect,
  useState,
  useRef,
}
  from "react";

// react project import
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'

// CSS import
import './DialogInput.css';

// main function
// TODO get rid of extra renders and calculations
export default function DialogInput({
  index,
  // TODO check if name and id is needed
  id,
  label,
  placeholder,
  initialValue = "",
  validationAttributes,
  disabledAttribute,
  assignFormInputStatus,
  setInputsValidity,
  setInputsUpdateStatus,
  updateFormInputsValues,
}) {
  // contexts
  const styling = useContext(DialogStylingContext);

  // states
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isOnChangeTriggered, setIsOnChangeTriggered] = useState(false);
  const [isInvalidStyle, setIsInvalidStyle] = useState(true);

  // refs
  const inputRef = useRef();

  // functions

  function isUpdated(currentValue, prevValue) {
    return currentValue !== prevValue ? true : false
  }

  function liftUpInputData(input) {
    assignFormInputStatus(index, input.validity.valid, setInputsValidity);
    assignFormInputStatus(index, isUpdated(input.value, initialValue), setInputsUpdateStatus);
    updateFormInputsValues(input.name, input.value);
  }

  function handleValidationStatus(input) {
    setIsValid(input.validity.valid);
    setErrorMessage(input.validationMessage);
  }

  function handleChange(e) {
    // TODO think about excluding repeated code
    const input = e.target;
    setValue(input.value);
    setIsOnChangeTriggered(true);
    handleValidationStatus(input);
    liftUpInputData(input);
  }

  // effects

  useEffect(() => {
    // TODO think about excluding repeated code
    const input = inputRef.current;
    handleValidationStatus(input);
    liftUpInputData(input)
  },
    []);

  useEffect(() => {
    setErrorMessage(inputRef.current.validationMessage);
  },
    [disabledAttribute]);

  useEffect(() => {
    setIsInvalidStyle(!isValid
      && (isOnChangeTriggered || value !== "")
      && !disabledAttribute.disabled
      ? true : false)
  },
    [isValid, isOnChangeTriggered, value, disabledAttribute]);

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
