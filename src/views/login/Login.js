import React, { useState } from "react";
import styles from './Login.module.css';
import { authService } from "../../services";
import { useHistory } from "react-router-dom";
import { errorsEnum } from "../../errors";
import { Error } from "../../components";
import { toastifyHelper } from "../../funtion-helpers";
import { constants } from "../../constants";
import { setAuthData, setLanguage } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { language, authData } = useSelector(({language, auth}) => ({ ...language, ...auth }));
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState('');


  const checkAuthData = (e) => {
    const { target: { value, name } } = e;
    dispatch(setAuthData({
      ...authData,
      [name]: value
    }));
  };

  const onSubmitHandler = async () => {
    dispatch(setLanguage('ru'));
    try {
      const { tokens: { access_token, refresh_token }, user } = await authService.authUser(authData) || { };

      localStorage.setItem('access_token', JSON.stringify(access_token));
      localStorage.setItem('refresh_token', JSON.stringify(refresh_token));

      dispatch(setAuthData({
        ...authData,
        email: '',
        password: '',
        user
      }));

      setError(null);
      toastifyHelper.notify(constants.USER_IS_AUTHORIZED[language]);

      history.push('/'); // pass to '/' || products when authorized
    } catch ({ response: { data } }) {
      setError(errorsEnum[data.customCode][language]);

      toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
    }
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
        {!!error && <Error error={error}/>}
        <div>
          <button onClick={onSubmitHandler}>Войти</button>
          <button onClick={onRedirectReg}>Регистрация</button>
        </div>
      </div>
    </div>
  );
};
