import React, { useMemo, useState } from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "../logo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { WishlistBtn } from "../wishlistBtn";
import queryString from "query-string";
import { CartBtn } from "../cartBtn";
import { useSelector } from "react-redux";

export const HeaderBlock = () => {
  const history = useHistory();
  // const searchParams = useLocation().search.replace('?', '');
  const location = useLocation();
  const [namePhrase, setNamePhrase] = useState('');
  const { productIdsInWishlist, productsInCart, user } = useSelector(
    ({ wishlist, cart, users }) => ({ ...wishlist, ...cart, ...users }));

  const totals = useMemo(() => productsInCart.reduce((acc, el) => acc += el.count, 0), [productsInCart]);

  const onWishlistViewClick = () => {
    history.push("/wishlist");
  };

  const onCartViewClick = () => {
    history.push("/cart");
  };

  const onInputNamePhrase = (e) => {
    const { target: { value }, key } = e;
    setNamePhrase(value);
    if (key === 'Enter') {
      const parsed = queryString.parse(location.search);

      delete parsed.page;
      parsed.name = namePhrase;

      const string = queryString.stringify(parsed);

      history.push(`/products?${string}`);
      // history.push(`/products?${transformQuery(searchParams, { name: namePhrase })}`) // ignore Lower/UpperCase in 'back'
      setNamePhrase('');
    }
  };

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
      {
        !!user.name
          // ? <div className={styles.user_name}>{userName}</div>
          ? <div className={styles.user_name}>{user.name}</div>
          :<div><Link to='/auth'>Вход</Link></div>
      }
      <div className={styles.cart_wishlist_block}>
        <WishlistBtn click={onWishlistViewClick} title={'Отложенные'} count={productIdsInWishlist?.length}/>
        <CartBtn click={onCartViewClick} title={'Корзина'} count={totals}/>
      </div>
    </div>
  );
};
