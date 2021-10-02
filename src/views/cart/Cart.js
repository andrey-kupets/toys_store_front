import React, { useEffect, useMemo } from "react";
import styles from './Cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ProductInCart } from "../../components";
import { orderService, userService } from "../../services";
import { emptyCart, setLoading, setUser, showProductModal } from "../../redux";
import { checkAuth, toastifyHelper } from "../../funtion-helpers";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";
import { messagesEnum } from "../../constants";

export const Cart = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { user, language, loading, productsInCart } =
    useSelector(({ users, language, products, cart }) => ({ ...users, ...language, ...products, ...cart }));
  const dispatch = useDispatch();
  const history = useHistory();

  const getUser = async (userId) => {
    try {
      dispatch(setLoading(true));

      const res = await userService.getUserById(userId);

      console.log(res, 'USER FROM DB in CART')

      dispatch(setUser(res));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUser(userId);
  }, [productsInCart]);

  const quantityTotals = useMemo(() => user?._cart
    .reduce((acc, el) => acc + el.count, 0), [user?._cart]);
  const sumTotals = useMemo(() => user?._productsInCart && user?._productsInCart
    .reduce((acc, el) => acc + el.price * user?._cart
      .find((item) => item._id === el._id).count, 0), [user?._productsInCart]);

  const makeOrder = async () => {
    const { productsInCart } = JSON.parse(localStorage.getItem('CART'));

    await orderService.makeOrder({ order: productsInCart, _user_id: userId });
  };

  const clearCart = async (order) => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    if (!access_token) return history.push('/auth');

    const updateUserItem = async (userId, token = access_token) => {
      return await userService.updateOneUser(userId, { _cart: [] }, token);
    };

    await checkAuth(updateUserItem, language, history, dispatch);
    !!order && order() && toastifyHelper.notify(messagesEnum.ORDER_GENERATED[language]);

    dispatch(emptyCart());
  };

  return (
    <div className={styles.flex}>
      {(loading || loading === null)
        ? <Loading/>
        :!!user._productsInCart?.length
          ? (<div className={styles.flex}>
            <div className={styles.product_cards_wrapper}>
              {
                user._productsInCart
                  .map(el => <ProductInCart key={el._id} {...el}
                                            item={user._cart.find((item) => item._id === el._id)}/>)
              }
            </div>
            <div className={styles.order_modal_wrapper}>
              <span>Всего {quantityTotals} товаров на сумму <b>{sumTotals}</b> грн.</span>
              <span><b>ИТОГО</b> с доставкой <b>{sumTotals < 500 ? sumTotals + 50 :sumTotals}</b> грн.</span>
              <button className={styles.order_modal_button} onClick={() => clearCart(makeOrder)}>ОФОРМИТЬ ЗАКАЗ</button>
              <span
                className={styles.center}>Стоимость доставки вы сможете узнать в разделе "Условия оплаты и доставки"</span>
              <hr/>
              <button className={styles.order_modal_button} onClick={() => clearCart()}>ОЧИСТИТЬ КОРЗИНУ</button>
            </div>
          </div>)
          :<div className={styles.empty_cart}>ЗДЕСЬ МОГУТ БЫТЬ ВАШИ ПРОДУКТЫ</div>
      }
    </div>
  );
};
