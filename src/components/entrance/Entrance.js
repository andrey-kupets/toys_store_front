import React from "react";
import styles from './Entrance.module.css';

export const Entrance = () => {
  return (
    <div className={styles.entrance_wrapper}>
      <div className={styles.entrance_window}>
        <input placeholder='E-mail'/><br/>
        <input placeholder='Пароль'/><br/>
        <div>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
