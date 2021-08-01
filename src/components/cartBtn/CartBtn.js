import React from "react";
import { constants } from "../../constants";
import styles from './CartBtn.module.css';

export const CartBtn = (props) => {
  const { btnName, title, view } = props;
  console.log(view)
  console.log(btnName)

  return (
    <button onClick={view} title={title}>{btnName}
      <img className={styles.cart_wishlist_icon} src={constants.CART_2}
           alt="cart"/>
    </button>
  );
};
