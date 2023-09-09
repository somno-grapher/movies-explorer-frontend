// react vendor import
import React, { useState } from "react";

// react project import
import Entry from '../Entry/Entry.jsx';
import EntryInput from '../EntryInput/EntryInput.jsx';

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
    <Entry
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTip="Уже зарегистрированы?"
      linkTitle="Войти"
      linkPath="/signin"
      onSubmit={handleSubmit}>
      <EntryInput
        id="register-name"
        label="Имя"
        placeholder="Введите имя"
        validationAttributes={{
          type: "text",
          reqired: true,
        }}
      />
      <EntryInput
        id="register-email"
        label="E-mail"
        placeholder="Введите e-mail"
        validationAttributes={{
          type: "email",
          reqired: true,
        }}
      />
      <EntryInput
        id="register-password"
        label="Пароль"
        placeholder="Введите пароль"
        validationAttributes={{
          type: "password",
          reqired: true,
        }}
      />
    </Entry>
  );

}

export default Register;

