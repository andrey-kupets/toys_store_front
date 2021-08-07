import React, { useState } from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "../logo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { WishlistBtn } from "../wishlistBtn";
import { CartBtn } from "../cartBtn";
import { transformQuery } from '../../funtion-helpers';
import { useSelector } from "react-redux";

export const HeaderBlock = () => {
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');

  const [namePhrase, setNamePhrase] = useState('');

  const {productIdsInWishlist, oneProductCountInCart} = useSelector(({wishlist, cart}) => ({ ...wishlist, ...cart }));

  const onWishlistViewClick = () => {
    history.push('/users/:userId/wishlist');
    // history.push('/users/wishlist');
  };

  const onCartViewClick = () => {
    history.push('/users/:userId/cart');
    // history.push('/users/cart');
  };

  const onInputNamePhrase = (e) => {
    const { target: { value }, key } = e;
    setNamePhrase(value);
    if (key === 'Enter') {
      history.push(`/products?page=1&${transformQuery(searchParams, { name: namePhrase })}`) // ignore Lower/UpperCase in 'back'
      setNamePhrase('');
    }
  }

  return (
    <div className={styles.header_wrapper}>
      <Logo/>
      <div><Link to='/'>Главная</Link></div>
      <div>Контакты</div>
      <div>
        <label>Поиск</label>
        <input
          className={styles.header_input} type="text"
          placeholder='Введите название продукта целиком / часть фразы'
          value={namePhrase}
          onChange={onInputNamePhrase}
          onKeyDown={onInputNamePhrase}
        />
      </div>
      <div><Link to='/auth'>Вход</Link></div>
      <div className={styles.cart_wishlist_block}>
        <WishlistBtn click={onWishlistViewClick} title={'Отложенные'} count={productIdsInWishlist?.length}/>
        <CartBtn click={onCartViewClick} title={'Корзина'} count={oneProductCountInCart}/>
      </div>
    </div>
  );
};
