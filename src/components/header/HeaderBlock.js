import React, { useState } from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "../logo";
import { Link, useHistory } from "react-router-dom";
import { Wishlist } from "../wishlist";
import { Cart } from "../cart";

export const HeaderBlock = () => {
  const history = useHistory();
  const [namePhrase, setNamePhrase] = useState('');

  const onInputNamePhrase = (e) => {
    const { target: { value }, key } = e;
    if (key === 'Enter') history.push(`/products?name=${value.toLowerCase()}`)
  }

  return (
    <div className={styles.header_wrapper}>
      <Logo/>
      <div><Link to='/products'>Главная</Link></div>
      <div>Контакты</div>
      <div>
        <label>Поиск</label>
        <input
          className={styles.header_input} type="text"
          placeholder='Введите название продукта целиком / часть фразы'
          // value={namePhrase}
          onChange={onInputNamePhrase}
          onKeyDown={onInputNamePhrase}
        />
      </div>
      <div>Вход</div>
      <div className={styles.cart_wishlist_block}>
        <Wishlist title={'Отложенные'}/>
        <Cart title={'Корзина'}/>
      </div>
    </div>
  );
};
