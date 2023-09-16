// react vendor import
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';

// react project import
import DialogStylingContext from '../../contexts/dialogStylingContext.js'
import DialogInput from '../DialogInput/DialogInput.jsx';


// image import
import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Dialog.css';

// main function
export default function Dialog({
  name,
  title,
  buttonText,
  linkTip,
  linkTitle,
  linkPath,
  onSubmit,
  inputs
}) {

  // utils

  const styling = useContext(DialogStylingContext);

  const [isEditMode, setIsEditMode] = useState(() => {
    if (styling === "profile") {
      return false
    } else {
      return true
    };
  });

  const isLogoDisplayed = styling !== "profile"
    ? true
    : false;

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
          <Link className="dialog__logo-link-wrapper"
            to="/">
            <img className="dialog__logo"
              src={logoPath}
              alt="Логотип" />
          </Link>
        }

        {/* title */}
        <h2 className={`dialog__title
        dialog__title_styling_${styling}`
        }>
          {title}
        </h2>

        {/* form */}
        <form className="dialog__form"
          // TODO: check the purpose
          name={`${name}-form`}
          // TODO: provide js validation
          // noValidate
          onSubmit={onSubmit}>
          <div className="dialog__inputs-container">
            {inputs.map((input, i) => {
              return (
                <DialogInput
                  key={i}
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  validationAttributes={input.validationAttributes}
                  isDisabled={input.isDisabled}
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
              <button className="dialog__submit-button"
                type="submit"
              >
                {buttonText}
              </button>
            }
          </div>
        </form>

        {/* navbar */}
        {(!isEditMode || styling !== "profile") &&
          <nav className="dialog__navbar">
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
