// react vendor import
import React from "react";
import { Link } from 'react-router-dom';

// image import
import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Entry.css';

function Entry({
  name,
  title,
  buttonText,
  linkTip,
  linkTitle,
  linkPath,
  onSubmit,
  children
}) {

  // 2B rendered
  return (
    <main className="entry">
      <div className="entry__container">

        {/* logo */}
        <Link to="/">
          <img className="entry__logo"
            src={logoPath}
            alt="Логотип" />
        </Link>
        {/* title */}
        <h2 className="entry__title">{title}</h2>
        {/* form */}
        <form className="entry__form"
          // TODO: check purpose
          name={`${name}-form`}
          // TODO: provide js validation
          // noValidate
          onSubmit={onSubmit}>
          <div className="entry__inputs-container">
            {children}
          </div>
          <button className="entry__submit-button"
            type="submit">
            {buttonText}
          </button>
        </form>

        {/* navbar */}
        <nav className="entry__navbar">
          <p className="entry__link-tip">
            {linkTip}
          </p>
          <Link className="entry__link"
            to={linkPath}>
            {linkTitle}
          </Link>
        </nav>

      </div>
    </main>
  );
}

export default Entry;
