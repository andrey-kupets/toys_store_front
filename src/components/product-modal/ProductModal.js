import React from "react";
import styles from './ProductModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setProductToCart, showProductModal } from "../../redux";
import { useHistory, useParams } from "react-router-dom";
import { userService } from "../../services";
import { checkAuth } from "../../funtion-helpers";

export const ProductModal = ({ product, load, click }) => {
  const { productsInCart, language } = useSelector(({ cart, language }) => ({ ...cart, ...language }));
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  if (product.id !== productId) dispatch(showProductModal(!load)); // fix URL-passing bug with opened modal

  const onCounterClick = async (payload) => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    if (!access_token) return history.push('/auth');

    dispatch(setProductToCart(payload));

    const cart = JSON.parse(localStorage.getItem('CART'));
    const updateUserItem = async (userId, token = access_token) => {
      return await userService.updateOneUser(userId, { _cart: cart.productsInCart }, token);
    };

    await checkAuth(updateUserItem, language, history, dispatch);

  };

  const count = productsInCart.find(el => el._id === product.id)?.count || 1;

  const onCartPassClick = () => {
    history.push("/cart");
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
