import React, { useEffect } from "react";
import styles from './Wishlist.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoading, setUser } from "../../redux";
import { userService } from "../../services";
import { Loading, ProductInWishlist } from "../../components";

export const Wishlist = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { user, language, loading, productIdsInWishlist } =
    useSelector(({ users, language, products, wishlist }) => ({ ...users, ...language, ...products, ...wishlist }));
  const dispatch = useDispatch();
  const history = useHistory();

  const getUser = async () => {
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
  }, [productIdsInWishlist]);

  return (
    <div className={styles.flex}>
      {(loading || loading === null)
        ? <Loading/>
        :!!user?._productsInWishlist.length
          ? (<div className={styles.flex}>
            <div className={styles.product_cards_wrapper}>
              {
                user._productsInWishlist
                  .map(el => <ProductInWishlist key={el._id} {...el}/>)
              }
            </div>
            <div className={styles.modal_wrapper}>
              <button className={styles.modal_button} onClick={() => clearCart()}>ОЧИСТИТЬ КОРЗИНУ</button>
            </div>
          </div>)
          :<div className={styles.empty_wishlist}>ЗДЕСЬ МОГУТ БЫТЬ ВАШИ ПРОДУКТЫ</div>
      }
    </div>
  );
};
