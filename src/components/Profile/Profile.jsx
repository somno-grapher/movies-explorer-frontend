// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/dialogStylingContext.js'


// main function
export default function Login() {

  // TODO update
  const userName = "Жак Ив"
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
            isDisabled: {
              disabled: true
            }
          },
          {
            id: "register-email",
            label: "E-mail",
            placeholder: "Введите e-mail",
            initialValue: "arbitrary.email",
            validationAttributes: {
              type: "email",
              required: true,
            }
            ,
            isDisabled: {
              disabled: true
            }
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider>
  );

}
