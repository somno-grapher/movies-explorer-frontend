// react vendor import
import React, { useContext } from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'
import CurrentUserContext from '../../contexts/CurrentUserContext';

// main function
export default function Profile({
  onSubmit,
  onLinkClick,
}) {
  // contexts
  const user = useContext(CurrentUserContext);

  // 2B rendered
  return (
    <DialogStylingContext.Provider value='profile'>
      <Dialog
        title={"Привет, " + user.name + "!"}
        buttonText="Сохранить"
        linkTitle="Выйти из аккаунта"
        linkPath="/"
        onLinkClick={onLinkClick}
        // TODO make general structure for repeated inputs
        inputsAttributes={[
          {
            id: "profile-name",
            label: "Имя",
            placeholder: "Введите имя",
            initialValue: user.name,
            validationAttributes: {
              // TODO enhance validation
              type: "text",
              minLength: 2,
              maxLength: 30,
              required: true,
            },
          },
          {
            id: "profile-email",
            label: "E-mail",
            placeholder: "Введите e-mail",
            initialValue: user.email,
            validationAttributes: {
              type: "email",
              required: true,
            },
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider >
  );

}
