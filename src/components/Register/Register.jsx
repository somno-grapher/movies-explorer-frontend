// react vendor import
import React, { useState } from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogInput from '../DialogInput/DialogInput.jsx';

function Register({
  handleRegister
}) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(
      formValue.password,
      formValue.email,
      setFormValue);
  }

  // to be rendered
  return (
    <Dialog
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTip="Уже зарегистрированы?"
      linkTitle="Войти"
      linkPath="/signin"
      onSubmit={handleSubmit}>
      <DialogInput
        id="register-name"
        label="Имя"
        placeholder="Введите имя"
        validationAttributes={{
          type: "text",
          reqired: true,
        }}
      />
      <DialogInput
        id="register-email"
        label="E-mail"
        placeholder="Введите e-mail"
        validationAttributes={{
          type: "email",
          reqired: true,
        }}
      />
      <DialogInput
        id="register-password"
        label="Пароль"
        placeholder="Введите пароль"
        validationAttributes={{
          type: "password",
          reqired: true,
        }}
      />
    </Dialog>
  );

}

export default Register;

