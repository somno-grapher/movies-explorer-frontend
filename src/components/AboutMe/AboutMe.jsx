// react vendor import
import React from 'react';

// react project import
import MainSubtitle from '../MainSubtitle/MainSubtitle';

// CSS import
import './AboutMe.css';

// img import
import myPhotoPath from '../../images/my-photo.jpg';

function AboutMe() {

  return (
    <section className="about-me">

      <MainSubtitle>Студент</MainSubtitle>

      <article className="about-me__article">
        <div className="about-me__description">
          <h3 className="about-me__article-header">
            Николай
          </h3>
          <h4 className="about-me__article-subheader">
            Веб-разработчик, 42 года
          </h4>
          <p className="about-me__article-text">
            Я живу в Москве и работаю инженером-конструктором и проектировщиком автоматизированных систем. Заинтересовался веб-разработкой, и данный сайт&nbsp;&mdash; результат моей работы.
          </p>
          <a href="https://github.com/somno-grapher" className="about-me__github"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={myPhotoPath} alt="Фото автора сайта" className="about-me__photo" />
      </article>

    </section >
  );

}

export default AboutMe;
