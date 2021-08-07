import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useParams
} from "react-router-dom";
import styles from './ProductDetails.module.css';
import { loadProductById } from "../../funtion-helpers";
import { WishlistBtn } from "../../components/wishlistBtn";
import { CartBtn } from "../../components/cartBtn";
import { Loading } from "../../components/loading";
import { PageNotFound } from "../page_not_found";
import { useDispatch, useSelector } from "react-redux";
import { showProductModal, toggleItem } from "../../redux";
import { ProductModal } from "../../components/product-modal";

export const ProductDetails = () => {
  // const { params: { productId } } = useRouteMatch(); // const match: {params : {id}}
  const { productId } = useParams(); // straight const params: {id}
  const { loading, product, productModal, language } = useSelector(
    ({ products, language }) => ({ ...products, ...language })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    loadProductById(productId, dispatch, language);
  }, []);

  if (loading === false && !product?.id) {
    return <PageNotFound/>
  }

  const onModalClick = (payload) => {
    dispatch(showProductModal(payload));
  };

  // const actWishlist = (payload) => {
  //   dispatch(toggleItem(payload));
  // };

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
          <WishlistBtn btnName={'Отложить'} click={onModalClick}/>
          {/*<WishlistBtn btnName={'Закрыть'} view={onModalClick}/>*/}
          {/* set close*/}
          <CartBtn btnName={'Купить'} view={onModalClick} state={true}/>
        </div>
        <div /*className={styles.cut}*/>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        {!!productModal && product && <ProductModal product={product} view={onModalClick} state={true}/>}
      </>)}
    </div>
  )
}
