import React from "react";
import styles from './RegisterActivate.module.css';
import { userService } from "../../services";
import { toastifyHelper } from "../../funtion-helpers";
import { useHistory, useLocation } from "react-router-dom";
import { errorsEnum } from "../../errors";
import { useSelector } from "react-redux";

export const RegisterActivate = () => {
  const { language } = useSelector(({language}) => language);
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');
  const action_token = searchParams.split('=').pop();

  const activateUserProfile = async (action_token) => {
    try {
      const activated = await userService.activateOneUser(action_token);

      toastifyHelper.notify(activated[language]);
      history.push('/');
    } catch ({ response: { data } }) {
      toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
    }
  }

  return (
    <div className={styles.register_activate_wrapper}>
      <div className={styles.register_activate_window}>
        <h2>CLICK THE BUTTON FOR YOUR PROFILE ACTIVATION</h2>
        <button onClick={() => activateUserProfile(action_token)}>ACTIVATE</button>
      </div>
    </div>
  )
};
