import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from './ProductDetails.module.css';
import { CartBtn, Loading, ProductModal, WishlistBtn } from "../../components";
import { PageNotFound } from "../page_not_found";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProductById,
  setProductToCart,
  showProductModal,
  toggleItemInWishlist,
  transferDataToCartFromDB
} from "../../redux";
import { userService } from "../../services";
import { checkAuth } from "../../funtion-helpers";

export const ProductDetails = () => {
  const { productId } = useParams();
  const {
    loading,
    language,
    product,
    productModal,
    productIdsInWishlist,
    productsInCart,
    user
  } = useSelector(
    ({ products, language, wishlist, cart, users }) => ({ ...products, ...language, ...wishlist, ...cart, ...users })
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const activeProductObj = productsInCart.find(obj => obj._id === product?.id);
  const productExistsInWishlist = productIdsInWishlist.includes(product?.id);

  useEffect(() => {
    dispatch(loadProductById(productId));
  }, []);

  if (loading === false && !product?.id) {
    return <PageNotFound/>
  }

  const onModalClick = async (payload) => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    if (!access_token) return history.push('/auth');

    // dispatch(transferDataToCartFromDB(user._cart))

    if (payload && !activeProductObj) dispatch(setProductToCart(product.id));

    const cart = JSON.parse(localStorage.getItem('CART'));
    const updateUserItem = async (userId, token = access_token) => {
      return await userService.updateOneUser(userId, { _cart: cart.productsInCart }, token);
    };

    await checkAuth(updateUserItem, language, history, dispatch);

    dispatch(showProductModal(payload));
  };

  const onWishlistClick = async (productId) => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    if (!access_token) return history.push('/auth');

    dispatch(toggleItemInWishlist(productId));

    const wishlist = JSON.parse(localStorage.getItem('WISHLIST'));
    const updateUserItem = async  (userId, token = access_token) => {
      return await userService.updateOneUser(userId, { _wishlist: wishlist.productIdsInWishlist }, token);
    }

    await checkAuth(updateUserItem, language, history, dispatch);
  };

  return (
    <div className={styles.product_details_wrapper}>
      {loading || loading === null && !product ? <Loading/> :(<>
        <div className={styles.product_properties}>
          <h2>{product.name}</h2>
          <span>????????: <b>{product.price}</b> ??????.</span><br/>
          <span>Category: <i><u>{product.category}</u></i></span><br/>
          <span>Type: <i>{product.type}</i></span>
          <p>{product.description}</p>
          <WishlistBtn
            style={{
              backgroundColor: productExistsInWishlist ? 'antiquewhite' :''
            }}
            btnName={productExistsInWishlist ? '????????????' :'????????????????'}
            click={onWishlistClick}
            load={product.id}
          />
          <CartBtn btnName={'????????????'} click={onModalClick} load={true}/>
        </div>
        <div /*className={styles.cut}*/>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        {!!productModal && product &&
        <ProductModal product={product} click={(payload) => dispatch(showProductModal(payload))} load={true}/>}
      </>)}
    </div>
  )
};


