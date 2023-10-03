// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'


// main function
export default function Login({ onSubmit }) {
  // consts
  const emailId = 'login-email';
  const passwordId = 'login-password';

  // functions

  function handleSubmit(
    inputsValues,
    updateErrorMessage,
    updateIsOnStanby,
  ) {
    onSubmit(
      inputsValues[emailId],
      inputsValues[passwordId],
      updateErrorMessage,
      updateIsOnStanby,
    );
  }

  // 2B rendered
  return (
    <DialogStylingContext.Provider value='entry'>
      <Dialog
        title="Рады видеть!"
        buttonText="Войти"
        linkTip="Еще не зарегистрированы?"
        linkTitle="Регистрация"
        linkPath="/signup"
        onSubmit={handleSubmit}
        inputsAttributes={[
          {
            id: emailId,
            label: "E-mail",
            placeholder: "Введите почту",
            validationAttributes: {
              type: "email",
              required: true,
            },
          },
          {
            id: passwordId,
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
