import React from "react";
import { constants } from "../../constants";
import styles from './Cart.module.css';

export const Cart = (props) => {
  const { btnName, title } = props;
  return (
    <button title={title}>{btnName}
      <img className={styles.cart_wishlist_icon} src={constants.CART_2}
           alt="cart"/>
    </button>
  );
};
