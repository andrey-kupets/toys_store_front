import React, { useEffect, useMemo } from "react";
import styles from './Cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ProductInCart } from "../product-in-cart";
import { userService } from "../../services";
import { setUser } from "../../redux";

export const Cart = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { user, productsInCart } = useSelector(({ users, cart }) => ({ ...users, ...cart }));
  const dispatch = useDispatch();

  const getUser = async (userId) => {
    try {
      const res = await userService.getUserById(userId);
      dispatch(setUser(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser(userId);
  }, [])

  const quantityTotals = useMemo(() => productsInCart.reduce((acc, el) => acc += el.count, 0), [productsInCart]);
  const sumTotals = useMemo(() => user?._productsInCart.reduce((acc, el) => acc += el.price * user?._cart.find((item) => item._id === el._id).count, 0), [user?._productsInCart]);

  return (
    <div className={styles.flex}>
      <div className={styles.product_cards_wrapper}>
        {!!user?._productsInCart.length
          ? user._productsInCart
            .map(el => <ProductInCart key={el._id} {...el} item={user?._cart.find((item) => item._id === el._id)}/>)
          : 'ЗДЕСЬ МОГУТ БЫТЬ ВАШИ ПРОДУКТЫ'
        }
      </div>
      <div className={styles.order_modal_wrapper}>
        <span>Всего { quantityTotals } товаров на сумму <b>{ sumTotals }</b> грн.</span>
        <span><b>ИТОГО</b> с доставкой <b>{ sumTotals < 500 ? sumTotals + 50 : sumTotals }</b> грн.</span>
        <button className={styles.order_modal_button}>ОФОРМИТЬ ЗАКАЗ</button>
        <span className={styles.center}>Стоимость доставки вы сможете узнать в разделе "Условия оплаты и доставки"</span>
        <hr/>
        <button className={styles.order_modal_button}>ОЧИСТИТЬ КОРЗИНУ</button>
      </div>
    </div>
  );
};
