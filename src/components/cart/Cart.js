import React, { useEffect, useState } from "react";
import styles from './Cart.module.css';
import { useSelector } from "react-redux";
import { ProductInCart } from "../product-in-cart";
import { userService } from "../../services";

export const Cart = () => {
  const [user, setUser] = useState(null);
  const { productsInCart } = useSelector(({ cart }) => cart);
  const userId = JSON.parse(localStorage.getItem('userId'));

  const getUser = async (userId) => {
    try {
      const resp = await userService.getUserById(userId);
      setUser(resp)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser(userId);
  }, [])

  console.log(user);

  return (
    <div className={styles.cart_wrapper}>
      {!!productsInCart.length && productsInCart.map(el => <ProductInCart key={el._id} activeProductObj={el}/>)}
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

