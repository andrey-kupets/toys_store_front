import React from "react";
import styles from './ProductModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setProductToCart, showProductModal } from "../../redux";
import { useHistory, useParams } from "react-router-dom";

export const ProductModal = ({ product, load, click }) => {
  const { productsInCart } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId, productId } = useParams();

  if (product.id !== productId) dispatch(showProductModal(!load)); // fix URL-passing bug with opened modal

  const onCounterClick = (payload) => {
    dispatch(setProductToCart(payload));
  };

  const count = productsInCart.find(el => el.productId === product.id)?.count || 1;
  // const count = productsInCart && productsInCart.find(el => el.productId === product.id).count || 1;

  const onCartPassClick = () => {
    history.push(`/users/${userId}/cart`);
  };

  return (
    <div className={styles.product_modal_wrapper}>
      <button className={styles.btn_close} onClick={() => click(!load)}>X</button>
      <h3 className={styles.h3}>ТОВАР ДОБАВЛЕН В КОРЗИНУ</h3>
      <div className={styles.product_modal_main}>
        <div>
          <img className={styles.product_modal_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        <div className={styles.product_modal_info}>
          {product.name}
          <div className={styles.btn_count_wrapper}>
            <button
              disabled={count === 1}
              className={styles.btn_minus}
              onClick={() => onCounterClick({ id: product.id, count: -1 })}>-
            </button>
            <span className={styles.count_span}>{productsInCart.length && count}</span>
            <button
              className={styles.btn_plus}
              onClick={() => onCounterClick({ id: product.id, count: 1 })}>+
            </button>
          </div>
        </div>
      </div>
      <div>Общая стоимость этого товара <b>{productsInCart.length && product.price * count}</b> грн.</div>
      <button className={styles.btn_cart_pass} onClick={onCartPassClick}>ПЕРЕЙТИ В КОРЗИНУ</button>
    </div>
  );
};
