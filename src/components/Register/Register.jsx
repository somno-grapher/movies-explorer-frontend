// react vendor import
import React, { useState } from "react";

// react project import
import Entry from '../Entry/Entry.jsx';

// TODO: delete css

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

  return (
    <Entry
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTip="Уже зарегистрированы?"
      linkTitle="Войти"
      linkPath="/signin"
      onSubmit={handleSubmit}
    >
    </Entry>
  );

}

export default Register;

