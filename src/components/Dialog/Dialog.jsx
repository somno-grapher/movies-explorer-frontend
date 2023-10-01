// react vendor import
import React,
{
  useContext,
  useEffect,
  useState,
}
  from "react";
import { Link } from 'react-router-dom';

// react project import
import DialogStylingContext from '../../contexts/dialogStylingContext.js'
import DialogInput from '../DialogInput/DialogInput.jsx';
import Logo from '../Logo/Logo.jsx';

// CSS import
import './Dialog.css';

// main function
// TODO get rid of extra renders and calculations
export default function Dialog({
  name,
  title,
  buttonText,
  linkTip,
  linkTitle,
  linkPath,
  onSubmit,
  inputs,
}) {
  // contexts
  const styling = useContext(DialogStylingContext);

  // states

  const [isEditMode, setIsEditMode] = useState(() => {
    return styling === "profile" ? false : true;
  });

  const [inputsValidity, setInputsValidity] = useState(createInputsInitialStates());

  const [isValid, setIsValid] = useState(false);

  const [inputsUpdateStatus, setInputsUpdateStatus] = useState(createInputsInitialStates());

  const [isUpdated, setIsUpdated] = useState(false);

  // consts
  // TODO think about useMemo
  const isLogoDisplayed = styling !== "profile"
    ? true
    : false;

  // functions
  // TODO think about useCallback

  function validateForm() {
    setIsValid(!inputsValidity.some((inputValidity) => {
      return inputValidity === false
    }))
  }

  function checkUpdate() {
    setIsUpdated(inputsUpdateStatus.some((inputUpdateStatus) => {
      return inputUpdateStatus === true
    }))
  }

  const assignInputStatus = (inputIndex, inputStatus, setInputStatus) => {
    setInputStatus((prevInputsStatus) => {
      prevInputsStatus[inputIndex] = inputStatus;
      return [...prevInputsStatus];
    });
  }

  function createInputsInitialStates() {
    return inputs.map(() => {
      return false;
    })
  }

  function isSubmitDisabled() {
    return !isValid || (styling === "profile" && !isUpdated);
  }

  // effects

  // TODO think about how to prevent double rendering on inputsValidity change
  useEffect(() => {
    validateForm();
  },
    [inputsValidity]);

  useEffect(() => {
    checkUpdate();
  },
    [inputsUpdateStatus]);

  // 2B rendered
  return (
    <main className={`dialog
    dialog_styling_${styling}`
    }>

      {/* container */}
      <div className={`dialog__container
      dialog__container_styling_${styling}`
      }>

        {/* logo */}
        {isLogoDisplayed &&
          <div className="dialog__logo-container"
            to="/">
            <Logo />
          </div>
        }

        {/* title */}
        <h1 className={`dialog__title
        dialog__title_styling_${styling}`
        }>
          {title}
        </h1>

        {/* form */}
        <form className="dialog__form"
          // TODO: check the purpose
          name={`${name}-form`}
          noValidate
          onSubmit={onSubmit}>
          <div className={`dialog__inputs-container
          dialog__inputs-container_styling_${styling}`}>
            {inputs.map((input, i) => {
              return (
                <DialogInput
                  key={i}
                  index={i}
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  initialValue={input.initialValue}
                  validationAttributes={input.validationAttributes}
                  disabledAttribute={!isEditMode && { disabled: true }}
                  assignFormInputStatus={assignInputStatus}
                  setInputsValidity={setInputsValidity}
                  setInputsUpdateStatus={setInputsUpdateStatus}
                />
              )
            })}
          </div>
          <div className="dialog__lower-container">
            <span className="dialog__error">
              {/* TODO update */}
              Ошибка
            </span>
            {!isEditMode &&
              <button className="dialog__edit-button"
                type="button"
                onClick={() => setIsEditMode(true)}
              >
                Редактировать
              </button>
            }
            {isEditMode &&
              <button
                className={`dialog__submit-button
                ${isSubmitDisabled() && 'dialog__submit-button_disabled'}`}
                type="submit"
              >
                {buttonText}
              </button>
            }
          </div>
        </form>

        {/* navbar */}
        {(!isEditMode || styling !== "profile") &&
          <nav className={`dialog__navbar
          dialog__navbar_styling_${styling}`}>
            <p className="dialog__link-tip">
              {linkTip}
            </p>
            <Link className={`dialog__link
          dialog__link_styling_${styling}`}
              to={linkPath}>
              {linkTitle}
            </Link>
          </nav>
        }

      </div>
    </main >
  );
}
