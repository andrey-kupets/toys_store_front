import React from "react";
import styles from './ProductModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../redux";
import { useHistory, useParams } from "react-router-dom";

export const ProductModal = ({ product, state, view }) => {
  const { count } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  const onCounterClick = (payload) => {
    dispatch(setCount(payload));
  };

  const onCartPassClick = () => {
    history.push(`/users/${userId}/cart`);
  };

  return (
    <div className={styles.product_modal_wrapper}>
      <button className={styles.btn_close} onClick={() => view(!state)}>X</button>
      <h3 className={styles.h3}>ТОВАР ДОБАВЛЕН В КОРЗИНУ</h3>
      <div className={styles.product_modal_main}>
        <div>
          <img className={styles.product_modal_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        <div className={styles.product_modal_info}>
          {product.name}
          <div className={styles.btn_count_wrapper}>
            <button disabled={count === 1} className={styles.btn_minus} onClick={() => onCounterClick(- 1)}>-</button>
            <span className={styles.count_span}>{count}</span>
            <button className={styles.btn_plus} onClick={() => onCounterClick(+ 1)}>+</button>
          </div>
        </div>
      </div>
      <div>В корзине ... товаров на сумму ...</div>
      <button className={styles.btn_cart_pass} onClick={onCartPassClick}>ПЕРЕЙТИ В КОРЗИНУ</button>
    </div>
  );
};
