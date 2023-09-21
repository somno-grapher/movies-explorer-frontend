// react vendor import
import React from 'react';

// CSS import
import './MainSubtitle.css';

function MainSubtitle({children}) {

  return (
    <h2 className="main-subtitle">
      {children}
    </h2>
  );

}

export default MainSubtitle;
