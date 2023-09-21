// react vendor import
import React from 'react';

// CSS import
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <h2 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>

      <div className="footer__details">
        <p className="footer__copyright">©&nbsp;2023</p>
        <nav className="footer__navbar">
          <ul className="footer__navbar-list">
            <li className="footer__navbar-item">
              <a href="https://practicum.yandex.ru/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </footer>
  );
}

export default Footer;
