// react vendor import
import React from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogStylingContext from '../../contexts/DialogStylingContext.jsx'

// main function
function Register({ onSubmit }) {

  const handleSubmit = (inputsValues, updateErrorMessage) => {
    onSubmit(
      inputsValues["register-email"],
      inputsValues["register-password"],
      inputsValues["register-name"],
      updateErrorMessage,
      // setFormValue
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
            id: "register-name",
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

