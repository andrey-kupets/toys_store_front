import React from "react";
import { constants } from "../../constants";
import styles from './WishlistBtn.module.css';

export const WishlistBtn = (props) => {
  const { btnName, state = false, title, click } = props;

  return (
    <>
      <button onClick={() => click(state)} title={title}>{btnName}
        <img className={styles.cart_wishlist_icon} src={constants.WISHLIST_1}
             alt="wishlist"/>
      </button>
    </>
  );
};
