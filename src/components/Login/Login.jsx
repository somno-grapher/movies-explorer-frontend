// react vendor import
import React, { useState } from "react";

// react project import
import Entry from '../Entry/Entry.jsx';
import EntryInput from '../EntryInput/EntryInput.jsx';


// TODO: delete css

function Login({
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

  return (
    <Entry
      title="Рады видеть!"
      buttonText="Войти"
      linkTip="Еще не зарегистрированы?"
      linkTitle="Регистрация"
      linkPath="/signup"
      onSubmit={handleSubmit}>
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

export default Login;

