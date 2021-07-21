import React, { useState } from "react";
import styles from './Entrance.module.css';
import { authService } from "../../services";
import { Link, useHistory } from "react-router-dom";

export const Entrance = () => {

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

  return (
    <div className={styles.entrance_wrapper}>
      <div className={styles.entrance_window}>
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
          <button><Link to='/users'>Регистрация</Link></button>
        </div>
      </div>
    </div>
  )
}
