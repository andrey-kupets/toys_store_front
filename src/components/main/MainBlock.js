import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import { LeftSideBar } from "./left-sidebar";
import { ProductsList } from "./products-list";
import { getProducts } from "../../requests-helper";

export const MainBlock = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    const res = await getProducts();
    console.log(res, 'from main');
    setProducts(res);
  }, []);
  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      <LeftSideBar className={styles.left_sideBar}/>
      <ProductsList items={products} className={styles.products_container}/>
      {/*{children}*/}
    </div>
  );
};
