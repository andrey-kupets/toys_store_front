import React from "react";
import { imagesEnum } from "../../constants";
import styles from './CartBtn.module.css';

export const CartBtn = (props) => {
  const { btnName, load = false, title, click, count } = props;

  return (
    <button className={styles.cart_wishlist_btn_wrapper} onClick={() => click(load)} title={title}>{btnName}
      <img className={styles.cart_wishlist_icon} src={imagesEnum.CART_2}
           alt="cart"/>
      {!!count && <span className={styles.span_wrapper}>{count}</span>}
    </button>
  );
};
