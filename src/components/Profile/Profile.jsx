// react vendor import
import React, { useState } from "react";

// react project import
import Dialog from '../Dialog/Dialog.jsx';
import DialogInput from '../DialogInput/DialogInput.jsx';

// main function
export default function Login({
  handleLogin
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
    handleLogin(
      formValue.password,
      formValue.email,
      setFormValue);
  }

  const userName = "Жан Жак"
  const title = "Привет, " + userName + "!";

  // 2B rendered
  return (
    <Dialog
      type="profile"
      title={title}
      buttonText="Сохранить"
      linkTitle="Выйти из аккаунта"
      linkPath="/"
      onSubmit={handleSubmit}>
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