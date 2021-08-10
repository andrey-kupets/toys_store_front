import React from "react";
import styles from './Cart.module.css';
import { useSelector } from "react-redux";
import { ProductInCart } from "../product-in-cart";

export const Cart = () => {
  const {productsInCart} = useSelector(({cart}) => cart);

  console.log(productsInCart)


  return (
    <div className={styles.cart_wrapper}>
      {!!productsInCart.length && productsInCart.map(el => <ProductInCart key={el.productId} activeProductObj={el}/>)}
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

