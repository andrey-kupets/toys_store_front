import React from "react";
import styles from './RegisterActivate.module.css';

export const RegisterActivate = () => {
  return (
    <div className={styles.register_activate_wrapper}>
      <div className={styles.register_activate_window}>
        <h2>CLICK THE BUTTON FOR YOUR PROFILE ACTIVATION</h2>
        <button>ACTIVATE</button>
      </div>
    </div>
  )
};
