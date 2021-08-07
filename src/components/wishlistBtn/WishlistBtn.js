import React from "react";
import { constants } from "../../constants";
import styles from './WishlistBtn.module.css';

export const WishlistBtn = (props) => {
  const { btnName, load = false, title, click, count, style } = props;

  return (
    <>
      <button style={style} className={styles.cart_wishlist_btn_wrapper} onClick={() => click(load)} title={title}>{btnName}
        <img className={styles.cart_wishlist_icon} src={constants.WISHLIST_1}
             alt="wishlist"/>
        {!!count && <span className={styles.span_wrapper}>{count}</span>}
      </button>
    </>
  );
};
