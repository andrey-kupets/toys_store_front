import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useParams, useLocation
} from "react-router-dom";
import styles from './ProductDetails.module.css';
import { WishlistBtn } from "../../components/wishlistBtn";
import { CartBtn } from "../../components/cartBtn";
import { Loading } from "../../components/loading";
import { PageNotFound } from "../page_not_found";
import { useDispatch, useSelector } from "react-redux";
import { loadProductById, setProductToCart, showProductModal, toggleItemInWishlist } from "../../redux";
import { ProductModal } from "../../components/product-modal";

export const ProductDetails = () => {
  // const { params: { productId } } = useRouteMatch(); // const match: {params : {id}}
  const { productId } = useParams(); // straight const params: {id}
  const { loading, product, productModal, language, productIdsInWishlist, productsInCart } = useSelector(
    ({ products, language, wishlist, cart }) => ({ ...products, ...language, ...wishlist, ...cart })
  );
  const dispatch = useDispatch();
  const activeProductObj = productsInCart.find(obj => obj.productId === product.id);
  const productExistsInWishlist = productIdsInWishlist.includes(product?.id);
  const searchParams = useLocation().search.replace('?', '');


  useEffect(() => {
    dispatch(loadProductById(productId, language));
  }, []);

  if (loading === false && !product?.id) {
    return <PageNotFound/>
  }

  const onModalClick = (payload) => {
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
