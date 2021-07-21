import React, { useState } from "react";
import styles from './Login.module.css';
import { authService } from "../../services";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {

  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  const checkAuthData = (e) => {
    const { target: { value, name } } = e;
    setAuthData({
      ...authData,
      [name]: value
    })
  };

  const onSubmitHandler = async () => {
    // add todo try/catch + localeStorage
    setAuthData({
      ...authData,
      email: '',
      password: ''
    });

    const tokens = await authService.authUser(authData)
    console.log(tokens);

    history.push('/products'); // pass to products when authorized
  };

  const onRedirectReg = () => {
    history.push('/users');
  };

  return (
    <div className={styles.login_wrapper}>
      <div className={styles.login_window}>
        <h2>Вход</h2>
        <input
          name='email'
          type='text'
          value={authData.email}
          onChange={checkAuthData}
          placeholder='E-mail'/><br/>
        <input
          name='password'
          type='text'
          value={authData.password}
          onChange={checkAuthData}
          placeholder='Пароль'/><br/>
        <div>
          <button onClick={onSubmitHandler}>Войти</button>
          <button onClick={onRedirectReg}>Регистрация</button>
        </div>
      </div>
    </div>
  );
};
