import React from "react";
import { constants } from "../../constants";
import styles from './Wishlist.module.css';

export const Wishlist = (props) => {
  const { btnName, title } = props;
    return (
      <button title={title}>{btnName}
        <img className={styles.cart_wishlist_icon} src={constants.WISHLIST_1}
             alt="wishlist"/>
      </button>
    )
}
