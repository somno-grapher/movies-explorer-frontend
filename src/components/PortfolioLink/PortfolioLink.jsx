// react vendor import
import React from 'react';

// CSS import
import './PortfolioLink.css';

// img import
import gotoArrowPath from '../../images/icons/goto-arrow.svg';

function PortfolioLink({ href, children }) {

  return (
    <a href={href} className="portfolio-link">
      {children}
      <img src={gotoArrowPath} alt="Стрелка перехода" className="portfolio-link-image" />
    </a>
  );

}

export default PortfolioLink;
