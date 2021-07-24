import React, { useState } from "react";
import styles from './Registration.module.css';
import { userService } from "../../services";
import { useHistory } from "react-router-dom";

export const Registration = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const register = (e) => {
    const { target: { value, name } } = e;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const onSubmitHandler = async () => {
    setUserData({
      ...userData,
      name: '',
      phone: '',
      email: '',
      password: '',
    });

    const res = await userService.createUser(userData);
    console.log(res);

    history.push('/products');
  };

  return (
    <div className={styles.register_wrapper}>
      <div className={styles.register_window}>
        <h2>Регистрация</h2>
        <input
          name='name'
          value={userData.name}
          onChange={register}
          type="text"
          placeholder='Имя'/>
        <input
          name='phone'
          value={userData.phone}
          onChange={register}
          type="text"
          placeholder='Моб. телефон'/>
        <input
          name='email'
          value={userData.email}
          onChange={register}
          type="email"
          placeholder='Эл. почта'/>
        <input
          name='password'
          value={userData.password}
          onChange={register}
          type="text"
          title='Только латиница, не менее 8 символов, маленькие буквы, заглавные буквы, цифры'
          placeholder='Пароль как xxZZZ555'/>
        <button onClick={onSubmitHandler}>Зарегистрироваться</button>
      {userData.name && <div>You've been registered successfully</div>}
      </div>
    </div>
  );
};
