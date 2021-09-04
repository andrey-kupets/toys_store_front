import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from './ProductDetails.module.css';
import { CartBtn, Loading, ProductModal, WishlistBtn } from "../../components";
import { PageNotFound } from "../page_not_found";
import { useDispatch, useSelector } from "react-redux";
import { loadProductById, setAuthData, setProductToCart, showProductModal, toggleItemInWishlist } from "../../redux";

export const ProductDetails = () => {
  const { productId } = useParams(); // straight const params: {id}
  const { loading, product, productModal, language, productIdsInWishlist, productsInCart, authData: { user } } = useSelector(
    ({ products, language, wishlist, cart, auth }) => ({ ...products, ...language, ...wishlist, ...cart, ...auth })
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const activeProductObj = productsInCart.find(obj => obj._id === product?.id);
  const productExistsInWishlist = productIdsInWishlist.includes(product?.id);

  useEffect(() => {
    dispatch(loadProductById(productId, language));
  }, []);

  if (loading === false && !product?.id) {
    return <PageNotFound/>
  }

  const onModalClick = (payload) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      history.push("/auth");
      return;
    }
    //  todo send request to db --- set user_cart (product count +- )

    if(payload && !activeProductObj) dispatch(setProductToCart(product.id));
    dispatch(showProductModal(payload));
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
              backgroundColor: productExistsInWishlist ? 'antiquewhite' : ''
            }}
            btnName={productExistsInWishlist ? 'Изъять' :'Отложить'}
            click={onWishlistClick}
            load={product.id}
          />
          <CartBtn btnName={'Купить'} click={onModalClick} load={true}/>
        </div>
        <div /*className={styles.cut}*/>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        {!!productModal && product && <ProductModal product={product} click={onModalClick} load={true}/>}
      </>)}
    </div>
  )
}
