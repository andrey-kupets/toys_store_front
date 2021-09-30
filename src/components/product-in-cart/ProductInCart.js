import React from "react";
import styles from './ProductInCart.module.css';

export const ProductInCart = ({ img, name, price, item: { count } }) => {
  return (
    <div className={styles.product_card_wrapper}>
      <div>
        <img className={styles.product_card_image} src={img}/>
      </div>
      <div className={styles.product_card_info}>
        <div className={styles.product_card_name}>
          <span className={styles.product_card_title}>Товар</span>
          <span>{name}</span>
        </div>
        <div className={styles.product_card_div}>
          <span className={styles.product_card_title}>Цена</span>
          <span>{price} грн.</span></div>
        <div className={styles.product_card_div}>
          <span className={styles.product_card_title}>Кол-во</span>
          <span>{count}</span>
        </div>
        <div className={styles.product_card_div}>
          <span className={styles.product_card_title}>Сумма</span>
          <span>{price*count} грн.</span>
        </div>
      </div>
    </div>
  );
};
