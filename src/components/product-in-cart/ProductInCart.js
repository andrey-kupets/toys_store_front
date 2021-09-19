import React from "react";
import styles from './ProductInCart.module.css';

export const ProductInCart = ({ img, name, price, item: { count }}) => {
  return (
    <div className={styles.product_card_wrapper}>
      {/*<div className={styles.product_card_wrapper}>*/}
        <div>
          <img className={styles.product_card_image} src={img}/>
        </div>
        <div>{ name } - { price } - { count }</div>
      {/*</div>*/}
    </div>
  );
};
