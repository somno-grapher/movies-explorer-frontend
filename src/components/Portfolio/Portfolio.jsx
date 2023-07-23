// react vendor import
import React from 'react';


// react project import
import PortfolioLink from '../PortfolioLink/PortfolioLink.jsx';

// CSS import
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">

      <h2 className="portfolio__header">
        Портфолио
      </h2>

      <nav>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-list-item">
            <PortfolioLink href="https://github.com/somno-grapher/how-to-learn">
              Статичный сайт
            </PortfolioLink>
          </li>
          <li className="portfolio__links-list-item">
            <PortfolioLink href="https://github.com/somno-grapher/russian-travel">
              Адаптивный сайт
            </PortfolioLink>
          </li>
          <li className="portfolio__links-list-item">
            <PortfolioLink href="https://github.com/somno-grapher/react-mesto-api-full-gha">
              Одностраничное приложение
            </PortfolioLink>
          </li>
        </ul>

      </nav>

    </section >
  );

}

export default Portfolio;
