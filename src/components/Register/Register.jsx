// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'

// main function
function Register({ onSubmit }) {
  // consts
  const emailId = 'register-email';
  const passwordId = 'register-password';
  const nameId = 'register-name';

  // functions

  function handleSubmit(
    inputsValues,
    updateErrorMessage,
    updateIsOnStanby,
  ) {
    onSubmit(
      inputsValues[emailId],
      inputsValues[passwordId],
      inputsValues[nameId],
      updateErrorMessage,
      updateIsOnStanby,
    );
  }

  // 2B rendered
  return (
    <DialogStylingContext.Provider value="entry">
      <Dialog
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkTip="Уже зарегистрированы?"
        linkTitle="Войти"
        linkPath="/signin"
        onSubmit={handleSubmit}
        // TODO make general structure for repeated inputs
        inputsAttributes={[
          {
            id: nameId,
            label: "Имя",
            placeholder: "Введите имя",
            validationAttributes: {
              // TODO enhance validation
              type: "text",
              minLength: 2,
              maxLength: 30,
              required: true,
            }
          },
          {
            id: emailId,
            label: "E-mail",
            placeholder: "Введите e-mail",
            validationAttributes: {
              type: "email",
              required: true,
            }
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
            }
          }
        ]}
      >
      </Dialog>
    </DialogStylingContext.Provider>
  );

}

export default Register;

