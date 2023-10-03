// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'


// main function
export default function Profile({
  onSubmit,
  onLinkClick
}) {

  // TODO update
  const userName = "Жак Ив Кусто"
  const title = "Привет, " + userName + "!";

  // 2B rendered
  return (
    <DialogStylingContext.Provider value='profile'>
      <Dialog
        title={title}
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
            initialValue: userName,
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
            initialValue: "arbitrary@email",
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
