import React, { useState } from "react";
import styles from './Admin.module.css';
import { ProductCreate } from "../../components";

export const Admin = () => {
  const [window, setWindow] = useState({
    productCreate: false,
    productUpdate: false,
    productDelete: false,
  });

  const openWindow = (name) => {
    setWindow({
      ...window,
      [name]: !window[name]
    });
  };

  return (
    <div className={styles.flex}>
      <ul>
        <li>
          <button onClick={() => openWindow('productCreate')}>Добавить продукт в базу</button>
        </li>
        {/*<li>*/}
        {/*  <button onClick={() => openWindow('productUpdate')}>Изменить продукт в базе</button>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <button onClick={() => openWindow('productDelete')}>Удалить продукт</button>*/}
        {/*</li>*/}
      </ul>
      {!!window.productCreate && <ProductCreate status={openWindow}/>}
    </div>
  )
};
