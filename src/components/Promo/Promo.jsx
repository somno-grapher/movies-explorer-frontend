// react vendor import
import React from 'react';

// CSS import
import './Promo.css';

// img import
import promoImagePath from '../../images/promo-image.svg';

function Promo() {

  return (
    <section className="promo">

      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>

      <img
        className="promo__image"
        src={promoImagePath}
        alt="Промо-изображение"
      />

    </section>
  );

}

export default Promo;
