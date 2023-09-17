// react vendor import
import React from 'react';
import { Link } from 'react-router-dom';

// image import
import logoPath from '../../images/logo/logo.svg';

// CSS import
import './Logo.css';

//main function
export default function Header() {
  return (
    <Link className="logo"
      to="/">
      <img
        className="logo__icon"
        src={logoPath}
        alt="Логотип"
      />
    </Link>
  );
}

