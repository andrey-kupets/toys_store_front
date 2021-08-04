import React from "react";
import styles from './ProductModal.module.css';

export const ProductModal = ({product}) => {

  return (
    <div className={styles.product_modal_wrapper}>
      <button className={styles.btn_close}>X</button>
      <h3 className={styles.h3}>ТОВАР ДОБАВЛЕН В КОРЗИНУ</h3>
      <div className={styles.product_modal_main}>
        <div>
          <img className={styles.product_modal_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        <div className={styles.product_modal_info}>
          {product.name}
          <div className={styles.btn_count_wrapper}>
            <button className={styles.btn_minus}>-</button>
            <span className={styles.count_span}>1</span>
            <button className={styles.btn_plus}>+</button>
          </div>
        </div>
      </div>
      <div>В корзине ... товаров на сумму ...</div>
      <button className={styles.btn_cart_pass}>ПЕРЕЙТИ В КОРЗИНУ</button>
    </div>
  );
};
