import React from "react";
import styles from '../Main.module.css';
import { ProductItem } from "../product-item";

export const ProductsList = ({ items }) => {
  console.log(items, 'items from Products-List');
  return (
    <div className={styles.products_list}>
      {items.map(item => <ProductItem key={item.id} {...item}/>)}
    </div>
  );
};
