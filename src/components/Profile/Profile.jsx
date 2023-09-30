// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/dialogStylingContext.js'


// main function
export default function Profile() {

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
        inputs={[
          {
            id: "register-name",
            label: "Имя",
            placeholder: "Введите имя",
            initialValue: userName,
            validationAttributes: {
              type: "text",
              minLength: 2,
              maxLength: 30,
              required: true,
            },
          },
          {
            id: "register-email",
            label: "E-mail",
            placeholder: "Введите e-mail",
            initialValue: "arbitraryemail",
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
