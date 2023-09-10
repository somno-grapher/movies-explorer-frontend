// react vendor import
import React from "react";
import { Link } from 'react-router-dom';

// image import
import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Dialog.css';

// main function
export default function Dialog({
  type,
  name,
  title,
  buttonText,
  linkTip,
  linkTitle,
  linkPath,
  onSubmit,
  children
}) {

  // utils
  const isLogoDisplayed = type !== "profile"
    ? true
    : false;

  // 2B rendered
  return (
    <main className={`dialog dialog_${type}`}>
      <div className="dialog__container">

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
        <h2 className="dialog__title">{title}</h2>

        {/* form */}
        <form className="dialog__form"
          // TODO: check the purpose
          name={`${name}-form`}
          // TODO: provide js validation
          // noValidate
          onSubmit={onSubmit}>
          <div className="dialog__inputs-container">
            {children}
          </div>
          <div className="dialog__lower-container">
            <span className="dialog__error">
              {/* TODO update */}
              Ошибка
            </span>
            <button className="dialog__submit-button"
              type="submit">
              {buttonText}
            </button>
          </div>
        </form>


        {/* navbar */}
        <nav className="dialog__navbar">
          <p className="dialog__link-tip">
            {linkTip}
          </p>
          <Link className="dialog__link"
            to={linkPath}>
            {linkTitle}
          </Link>
        </nav>

      </div>
    </main >
  );
}
