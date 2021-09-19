import React, { useEffect, useState } from "react";
import styles from './Cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import { ProductInCart } from "../product-in-cart";
import { userService } from "../../services";
import { setUser } from "../../redux";

export const Cart = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const { user } = useSelector(({ users }) => users);
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

  console.log(user)

  return (
    <div className={styles.cart_wrapper}>
      {!!user?._productsInCart.length
        ? user._productsInCart
          .map(el => <ProductInCart key={el._id} {...el} item={user?._cart.find((item) => item._id === el._id)}/>)
        : 'ЗДЕСЬ МОГУТ БЫТЬ ВАШИ ПРОДУКТЫ'
      }
    </div>
  );
};


// <div>
//   <span>Стоимость товара ИТОГО:</span>
//   <hr/>
//   <div className={styles.cart_titles}>
//     <span>Товар</span>
//     <span>Цена</span>
//     <span>Количество</span>
//     <span>Сумма</span>
//   </div>
//   <div className={styles.cart_payload}>
//     <div>product.image</div>
//     <div>product.name</div>
//     <div>product.price грн.</div>
//     <div>Количество
//       <button>-</button>
//       <span>1</span>
//       <button>+</button>
//     </div>
//     <div>Сумма{}грн.</div>
//   </div>
// </div>

