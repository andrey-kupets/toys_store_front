import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useParams
} from "react-router-dom";
import styles from './ProductDetails.module.css';
import { setProductById } from "../../funtion-helpers";
import { WishlistBtn } from "../../components/wishlistBtn";
import { CartBtn } from "../../components/cartBtn";
import { Loading } from "../../components/loading";
import { PageNotFound } from "../page_not_found";

export const ProductDetails = () => {
  // const { params: { productId } } = useRouteMatch(); // const match: {params : {id}}
  const { productId } = useParams(); // straight const params: {id}

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(product, 'product from ProductDetails');

  useEffect(async () => {
    await setProductById(productId, setProduct, setLoading);
  }, []);

  if (loading === false && !product?.id) {
    return <PageNotFound/>
  }

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
          <WishlistBtn btnName={'Отложить'}/>
          <CartBtn btnName={'Купить'}/>
        </div>
        <div /*className={styles.cut}*/>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
      </>)}
    </div>
  )
}
