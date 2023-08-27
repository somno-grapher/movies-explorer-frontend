// react vendor import
import React, { useState } from "react";

// react project import
import Entry from '../Entry/Entry.jsx';
import Input from '../Input/Input.jsx';

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

  // *to be rendered
  return (
    <Entry
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTip="Уже зарегистрированы?"
      linkTitle="Войти"
      linkPath="/signin"
      onSubmit={handleSubmit}>
      <Input
        id="register-email"
        title="Имя"
        style="entry" />
    </Entry>
  );

}

export default Register;

