import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from './ProductDetails.module.css';
import { CartBtn, Error, Loading, ProductModal, WishlistBtn } from "../../components";
import { PageNotFound } from "../page_not_found";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProductById,
  setProductToCart,
  showProductModal,
  toggleItemInWishlist
} from "../../redux";
import { userService } from "../../services";
import { errorsEnum } from "../../errors";
import { toastifyHelper } from "../../funtion-helpers";
import { axiosDB } from "../../services/axiosConfig";

export const ProductDetails = () => {
  const { productId } = useParams();
  const {
    loading,
    language,
    product,
    productModal,
    productIdsInWishlist,
    productsInCart,
  } = useSelector(
    ({ products, language, wishlist, cart }) => ({ ...products, ...language, ...wishlist, ...cart })
  );
  const [error, setError] = useState(null);

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
    const userId = JSON.parse(localStorage.getItem('userId'));
    const access_token = JSON.parse(localStorage.getItem('access_token'));
    try {

      if (!access_token) {
        history.push("/auth");
        return;
      }

      if (payload && !activeProductObj) dispatch(setProductToCart(product.id));

      const cart = JSON.parse(localStorage.getItem('CART'));
      await userService.updateOneUser(userId, { _cart: cart.productsInCart }, access_token);

      dispatch(showProductModal(payload));
    } catch ({ response: { status } }) {
      if (status === 401) {
        const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
        const res = await axiosDB.post('/auth/refresh', {}, {
          headers: {
            Authorization: `${refresh_token}`
          },
        });

        const cart = JSON.parse(localStorage.getItem('CART'));
        try {
          await userService.updateOneUser(userId, { _cart: cart.productsInCart }, res.data.access_token);

          dispatch(showProductModal(payload));
        } catch ({ response: { data } }) {

          setError(errorsEnum[data.customCode][language]);

          toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
        }

      }
    }
  };

  const onWishlistClick = (productId) => {
    dispatch(toggleItemInWishlist(productId));
  };

  return (
    <div className={styles.product_details_wrapper}>
      {loading || loading === null && !product ? <Loading/> :(<>
        {/*{loading || false ? Loading() :(<>*/}
        <div className={styles.product_properties}>
          <h2>{product.name}</h2>
          <span>Цена: <b>{product.price}</b> грн.</span><br/>
          <span>Category: <i><u>{product.category}</u></i></span><br/>
          <span>Type: <i>{product.type}</i></span>
          <p>{product.description}</p>
          <WishlistBtn
            style={{
              backgroundColor: productExistsInWishlist ? 'antiquewhite' :''
            }}
            btnName={productExistsInWishlist ? 'Изъять' :'Отложить'}
            click={onWishlistClick}
            load={product.id}
          />
          <CartBtn btnName={'Купить'} click={onModalClick} load={true}/>
          {!!error && <Error error={error}/>}
        </div>
        <div /*className={styles.cut}*/>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        {!!productModal && product && <ProductModal product={product} click={(payload) => dispatch(showProductModal(payload))} load={true}/>}
      </>)}
    </div>
  )
}
