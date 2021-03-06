import React, { useState } from "react";
import styles from './Register.module.css';
import { userService } from "../../services";
import { useHistory } from "react-router-dom";
import { toastifyHelper } from "../../funtion-helpers";
import { errorsEnum } from "../../errors";
import { Error } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { messagesEnum } from "../../constants";

export const Register = () => {
  const { language } = useSelector(({language}) => language);
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(null);
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
    try {
      setUserData({
        ...userData,
        name: '',
        phone: '',
        email: '',
        password: '',
      });

      const resData = await userService.createUser(userData);

      setError(null);
      // toastifyHelper.notify(resData[language]);
      toastifyHelper.notify(messagesEnum.USER_CREATED[language]); // or through msg.enum

      history.push('/');
    } catch ({ response: { data } }) {
      setError(errorsEnum[data.customCode][language]);

      toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
    }
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
        {!!error && <Error error={error}/>}
        <button onClick={onSubmitHandler}>Зарегистрироваться</button>
      </div>
    </div>
  );
};
