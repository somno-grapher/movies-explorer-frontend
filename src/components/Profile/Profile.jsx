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
            validationAttributes: {
              type: "text",
              required: true,
              value: userName
            },
            isDisabled: {
              disabled: true
            }
          },
          {
            id: "register-email",
            label: "E-mail",
            placeholder: "Введите e-mail",
            validationAttributes: {
              type: "email",
              required: true,
              value: "arbitrary.email"
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
