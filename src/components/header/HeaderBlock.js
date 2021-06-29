import React from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "./logo";
import { constants } from '../../constants';

export const HeaderBlock = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo/>
        <div>Контакты</div>
        <div>
          <label>Поиск</label>
          <input className={styles.header_input} type="text"/>
        </div>
        <div>Вход</div>
        <div className={styles.cart_wishlist_block}>
          <div>
            <button>
              <img title={'список желаний'} className={styles.cart_wishlist_icon} src={constants.WISHLIST_1}
                   alt="wishlist"/>
            </button>
          </div>
          <div>
            <button>
              <img title={'корзина'} className={styles.cart_wishlist_icon} src={constants.CART_2} alt="cart"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
