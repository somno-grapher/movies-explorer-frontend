// react vendor import
import React from 'react';
import { useContext } from 'react';

// react project import
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
    </main>
  );

}

export default Main;
