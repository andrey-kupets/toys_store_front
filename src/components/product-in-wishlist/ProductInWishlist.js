import React from "react";
import styles from './ProductInWishlist.module.css';

export const ProductInWishlist = ({ img, name, price }) => {
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
            <span>{price} грн.</span>
          </div>
        </div>
      </div>
    )
}
