import React, { useMemo, useState } from "react";
import styles from './HeaderBlock.module.css';
import { Logo } from "../logo";
import { Link, useHistory, useLocation } from "react-router-dom";
import { WishlistBtn } from "../wishlistBtn";
import { CartBtn } from "../cartBtn";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { logout } from "../../funtion-helpers";
import { userRoles } from "../../constants";

export const HeaderBlock = () => {
  const history = useHistory();
  // const searchParams = useLocation().search.replace('?', '');
  const location = useLocation();
  const dispatch = useDispatch();
  const [namePhrase, setNamePhrase] = useState('');
  const { productIdsInWishlist, productsInCart, user, productModal, language } = useSelector(
    ({ wishlist, cart, users, products, language }) => ({ ...wishlist, ...cart, ...users, ...products, ...language }));

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

      const stringified = queryString.stringify(parsed);

      history.push(`/products?${stringified}`);
      // history.push(`/products?${transformQuery(searchParams, { name: namePhrase })}`) // ignore Lower/UpperCase in 'back'
      setNamePhrase('');
    }
  };

  const { ADMIN, SUPER_ADMIN } = userRoles;

  return (
    <div className={styles.header_wrapper}>
      <Logo/>
      <div><Link to='/'>Главная</Link></div>
      {(!!user.role && user.role === (ADMIN || SUPER_ADMIN)) && <div><Link to='/admin'>Админ</Link></div>}
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
          ? <div className={styles.flex}>
            <div className={styles.user_name}>{user.name}</div>
            <div onClick={logout}><Link to='/'>Выход</Link></div>
          </div>
          :<div><Link to='/auth'>Вход</Link></div>
      }
      <div className={styles.cart_wishlist_block}>
        <WishlistBtn click={onWishlistViewClick} title={'Отложенные'} count={productIdsInWishlist?.length}/>
        <CartBtn click={onCartViewClick} title={'Корзина'} count={totals}/>
      </div>
    </div>
  );
};
