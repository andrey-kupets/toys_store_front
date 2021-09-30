import React, { useEffect } from "react";
import styles from './Wishlist.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoading, setUser } from "../../redux";
import { userService } from "../../services";

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
  }, []);

  return (
    <div className={styles.wishlist_wrapper}>
      WISHLIST IS HERE
    </div>
  );
};
