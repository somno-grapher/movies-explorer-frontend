// react vendor import
import React, { useState } from "react";

// react project import
import Entry from '../Entry/Entry.jsx';

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
    </Entry>
  );

}

export default Login;

