import React, { useState } from "react";
import styles from './Login.module.css';
import { authService } from "../../services";
import { useHistory } from "react-router-dom";
import { errorsEnum } from "../../errors";
import { Error } from "../../components";
import { toastifyHelper } from "../../funtion-helpers";
import { messagesEnum, userStatusesEnum } from "../../constants";
import {
  setAuthData,
  setUser,
  showProductModal,
  transferDataToCartFromDB,
  transferDataToWishlistFromDB
} from "../../redux";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { language, authData } = useSelector(({ language, auth }) => ({ ...language, ...auth }));
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
    try {
      const { tokens: { access_token, refresh_token }, user } = await authService.authUser(authData) || {};

      if (user.status !== userStatusesEnum.ACTIVATED) {
        setError(errorsEnum["4035"][language]);
        toastifyHelper.notifyError(errorsEnum["4035"][language]);
        return;
      }

      dispatch(setUser(user));
      dispatch(transferDataToCartFromDB(user._cart));
      dispatch(transferDataToWishlistFromDB(user._wishlist));
      // dispatch(showProductModal(false));

      localStorage.setItem('access_token', JSON.stringify(access_token));
      localStorage.setItem('refresh_token', JSON.stringify(refresh_token));
      localStorage.setItem('userId', JSON.stringify(user.id));
      localStorage.setItem('USER', JSON.stringify(user));

      dispatch(setAuthData({
        ...authData,
        email: '',
        password: '',
      }));

      setError(null);
      toastifyHelper.notify(messagesEnum.USER_IS_AUTHORIZED[language]);

      history.push('/'); // pass to '/' || products when authorized TODO pass to previous url
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
        <h2>????????</h2>
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
          placeholder='????????????'/><br/>
        {!!error && <Error error={error}/>}
        <div>
          <button onClick={onSubmitHandler}>??????????</button>
          <button onClick={onRedirectReg}>??????????????????????</button>
        </div>
      </div>
    </div>
  );
};
