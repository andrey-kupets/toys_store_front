import React, { useState } from "react";
import styles from './Login.module.css';
import { authService } from "../../services";
import { useHistory } from "react-router-dom";
import { errorsEnum } from "../../errors";
import { Error } from "../../components/error";
import { toastifyHelper } from "../../funtion-helpers";
import { constants } from "../../constants";
import { setLanguage } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { language } = useSelector(({language}) => language);
  const dispatch = useDispatch();

  const [error, setError] = useState('');
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
    dispatch(setLanguage('ru'));
    try {
      // todo localeStorage and???
      setAuthData({
        ...authData,
        email: '',
        password: ''
      });

      const { access_token, refresh_token } = await authService.authUser(authData) || { };
      localStorage.setItem('access_token', JSON.stringify(access_token));
      localStorage.setItem('refresh_token', JSON.stringify(refresh_token));

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
