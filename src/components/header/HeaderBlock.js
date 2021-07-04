import React from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "./logo";
import { constants } from '../../constants';
import { Link } from "react-router-dom";
import { Wishlist } from "../wishlist";
import { Cart } from "../cart";

export const HeaderBlock = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo/>
        <div><Link to='/products'>Главная</Link></div>
        <div>Контакты</div>
        <div>
          <label>Поиск</label>
          <input
            className={styles.header_input} type="text"
            placeholder='Название продукта целиком / часть фразы'
          />
        </div>
        <div>Вход</div>
        <div className={styles.cart_wishlist_block}>
          <Wishlist title={'Отложенные'}/>
          <Cart title={'Корзина'}/>
        </div>
      </div>
    </div>
  );
};
