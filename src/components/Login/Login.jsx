// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'


// main function
export default function Login() {



  // 2B rendered
  return (
    <DialogStylingContext.Provider value='entry'>
      <Dialog
        title="Рады видеть!"
        buttonText="Войти"
        linkTip="Еще не зарегистрированы?"
        linkTitle="Регистрация"
        linkPath="/signup"
        inputs={[
          {
            id: "register-email",
            label: "E-mail",
            placeholder: "Введите почту",
            validationAttributes: {
              type: "email",
              required: true,
            },
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
            },
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider>

  );

}
