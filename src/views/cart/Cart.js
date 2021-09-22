import React, { useEffect, useMemo } from "react";
import styles from './Cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ProductInCart } from "../../components";
import { userService } from "../../services";
import { emptyCart, setLoading, setUser } from "../../redux";
import { checkAuth } from "../../funtion-helpers";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";

export const Cart = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { user, language, loading } =
    useSelector(({ users, language, products }) => ({ ...users, ...language, ...products }));
  const dispatch = useDispatch();
  const history = useHistory();

  const getUser = async (userId) => {
    try {
      dispatch(setLoading(true));
      const res = await userService.getUserById(userId);
      dispatch(setUser(res));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUser(userId);
  }, [])

  const quantityTotals = useMemo(() => user?._cart.reduce((acc, el) => acc + el.count, 0), [user?._cart]);
  const sumTotals = useMemo(() => user?._productsInCart.reduce((acc, el) => acc + el.price * user?._cart.find((item) => item._id === el._id).count, 0), [user?._productsInCart]);



  return (
    <div className={styles.flex}>
      {(loading || loading === null)
        ? <Loading/>
        :(<div className={styles.flex}>
            <div className={styles.product_cards_wrapper}>
              {!!user?._productsInCart.length
                ? user._productsInCart
                  .map(el => <ProductInCart key={el._id} {...el}
                                            item={user?._cart.find((item) => item._id === el._id)}/>)
                :'ЗДЕСЬ МОГУТ БЫТЬ ВАШИ ПРОДУКТЫ'
              }
            </div>
            <div className={styles.order_modal_wrapper}>
              <span>Всего {quantityTotals} товаров на сумму <b>{sumTotals}</b> грн.</span>
              <span><b>ИТОГО</b> с доставкой <b>{sumTotals < 500 ? sumTotals + 50 :sumTotals}</b> грн.</span>
              <button className={styles.order_modal_button}>ОФОРМИТЬ ЗАКАЗ</button>
              <span
                className={styles.center}>Стоимость доставки вы сможете узнать в разделе "Условия оплаты и доставки"</span>
              <hr/>
              <button className={styles.order_modal_button}>ОЧИСТИТЬ КОРЗИНУ</button>
            </div>
          </div>
        )
      }
    </div>
  );
};
