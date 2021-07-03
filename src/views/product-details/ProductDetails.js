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
    <div style={{ flex: 1 }}>
      {loading || loading === null && !product ? Loading() :(<>
        <div className={styles.product_image_wrapper}>
          <img className={styles.product_image} src={product.img} alt={`${product.name} toy`}/>
        </div>
        <div>
          <h3>{product.name}</h3>
          <span>Цена: {product.price} грн.</span><br/>
          <span>Category: {product.category}</span><br/>
          <span>Type: {product.type}</span>
          <p>{product.description}</p>
        </div>
      </>)}
    </div>
  )
}
