import React from "react";
import styles from './Admin.module.css';

export const Admin = () => {
  return (
    <div className={styles.flex}>
      <ul>
        <li>
          <button>Добавить продукт в базу</button>
        </li>
        <li>
          <button>Изменить продукт в базе</button>
        </li>
        <li>
          <button>Удалить продукт</button>
        </li>
      </ul>
    </div>
  )
}
