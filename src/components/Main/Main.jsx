// react vendor import
import React from 'react';
import { useContext } from 'react';

// react project import
import Card from '../Card';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';


// CSS import
import './Main.css';
// import AboutMe from '../AboutMe/AboutMe';

function Main({
  cards,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
  onCardClick,
  onCardDelete,
  onCardLike }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <section className="profile content__profile">
        <button className="profile__avatar-container"
          onClick={handleEditAvatarClick}>
          <img src={currentUser.avatar}
            alt="Аватар"
            className="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button"
            className="edit-button profile__edit-button edit-button_type_profile"
            onClick={handleEditProfileClick}>
          </button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button type="button"
          className="add-button profile__add-button add-button_type_card"
          onClick={handleAddPlaceClick}>
        </button>
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.slice(0).reverse().map((card) => {
            // {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
                onCardLike={onCardLike}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );

}

export default Main;
