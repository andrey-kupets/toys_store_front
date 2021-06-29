import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import { LeftSideBar } from "./left-sidebar";
import { ProductsList } from "./products-list";
import { getProducts } from "../../requests-helper";

const Loading = () => <h1 className={styles.loading}>Loading...</h1>


export const MainBlock = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null); // можно проверить, происходил ли запрос вообще

  useEffect(async () => {
    await getProducts(setProducts, setLoading);
  }, []);

  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      <LeftSideBar className={styles.left_sideBar}/>
      {/*{loading && <Loading/>}*/}
      {/*{!loading && <ProductsList items={products} className={styles.products_container}/>}*/}
      {/*{children}*/}
      {/*{!loading && !products.length && 'na data'}*/}
      { loading || loading === null
        ? Loading()
        : <ProductsList items={products} className={styles.products_list}/>
      }
    </div>
  );
};
