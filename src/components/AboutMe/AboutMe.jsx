// react vendor import
import React from 'react';

// react project import
import MainSubtitle from '../MainSubtitle/MainSubtitle';

// CSS import
import './AboutMe.css';

// img import
import myPhotoPath from '../../images/avatar.jpg';

function AboutMe() {

  return (
    <section className="about-me">

      <MainSubtitle>Студент</MainSubtitle>

      <article className="about-me__article">
        <div className="about-me__description">
          <h3 className="about-me__article-header">
            Виталий
          </h3>
          <h4 className="about-me__article-subheader">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="about-me__article-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
