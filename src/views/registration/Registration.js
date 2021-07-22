import React, { useState } from "react";
import styles from './Registration.module.css';
import { userService } from "../../services";

export const Registration = () => {
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
    console.log(userData)
    const user = await userService.createUser(userData);
    console.log(user);

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
