// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/dialogStylingContext.js'


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
            id: "register-name",
            label: "Имя",
            placeholder: "Введите имя",
            validationAttributes: {
              type: "text",
              required: true,
            }
          },
          {
            id: "register-password",
            label: "Пароль",
            placeholder: "Введите пароль",
            validationAttributes: {
              type: "password",
              required: true,
            }
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider>

  );

}
