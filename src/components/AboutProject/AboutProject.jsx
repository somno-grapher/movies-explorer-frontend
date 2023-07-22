// react vendor import
import React from 'react';

// react project import
import MainSubtitle from '../MainSubtitle/MainSubtitle';

// CSS import
import './AboutProject.css';

function AboutProject() {

  return (
    <section className="about">

      <MainSubtitle>О проекте</MainSubtitle>

      <div className="about__description">
        <article className="about__article">
          <h3 className="about__article-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article className="about__article">
          <h3 className="about__article-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>

      <ul className="about__timeline">
        {/* <li className="about__timeline-item"> */}
        <li className="about__timeline-duration">
          1 неделя
        </li>
        <li className="about__timeline-duration">
          4 недели
        </li>
        <li className="about__timeline-task">
          Back-end
        </li>
        {/* </li> */}
        {/* <li className="about__timeline-item"> */}
        <li className="about__timeline-task">
          Front-end
        </li>
        {/* </li> */}
      </ul>

    </section >
  );

}

export default AboutProject;
