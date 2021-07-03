import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import styles from './ProductDetails.module.css';
import { getProductById } from "../../requests-helper";

const Loading = () => <div>Loading...</div>

export const ProductDetails = () => {
  // const { params: { productId } } = useRouteMatch(); // const match: {params : {id}}
  const { productId } = useParams(); // straight const params: {id}

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(product, 'product from ProductDetails');

  useEffect(async () => {
    await getProductById(productId, setProduct, setLoading);
  }, []);


  return (
    <div className={styles.product_details_wrapper}>
      {loading || loading === null && !product ? Loading() :(<>
        <div className={styles.product_details}>
          <div className={styles.product_properties}>
            <h2>{product.name}</h2>
            <span>Цена: <b>{product.price}</b> грн.</span><br/>
            <span>Category: <i><u>{product.category}</u></i></span><br/>
            <span>Type: <i>{product.type}</i></span>
            <p>{product.description}</p>
          </div>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
      </>)}
    </div>
  )
}
