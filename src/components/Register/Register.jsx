// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/dialogStylingContext.js'

// main function
function Register() {



  // to be rendered
  return (
    <DialogStylingContext.Provider value='entry'>
      <Dialog
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkTip="Уже зарегистрированы?"
        linkTitle="Войти"
        linkPath="/signin"
        inputs={[
          {
            id: "register-name",
            label: "Имя",
            placeholder: "Введите имя",
            validationAttributes: {
              type: "text",
              minLength: 2,
              maxLength: 30,
              required: true,
            }
          },
          {
            id: "register-email",
            label: "E-mail",
            placeholder: "Введите e-mail",
            validationAttributes: {
              type: "email",
              required: true,
            }
          },
          {
            id: "register-password",
            label: "Пароль",
            placeholder: "Введите пароль",
            validationAttributes: {
              type: "password",
              minLength: 2,
              maxLength: 30,
              required: true,
            }
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider>
  );

}

export default Register;

