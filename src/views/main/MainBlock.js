import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import { getProducts } from "../../requests-helper";
import { LeftSideBar, ProductsList } from "../../components";
import { useHistory } from "react-router-dom";

const Loading = () => <div className={styles.loading}>Loading...</div>


export const MainBlock = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null); // если null - можно проверить, происходил ли запрос вообще
  const history = useHistory();

  useEffect( () => {
     getProducts(setProducts, setLoading);
  }, []);

  const onProductClick = (product) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      <LeftSideBar/>
      {/*{children}*/}
      {loading || loading === null
        ? Loading() :(
          <ProductsList
            items={products}
            onProductClick={onProductClick}
          />
        )
      }
    </div>
  );
};
