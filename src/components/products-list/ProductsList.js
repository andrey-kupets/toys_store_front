import React from "react";
import styles from './ProductsList.module.css';
import { ProductItem } from "../product-item";

export const ProductsList = ({ items }) => {
  console.log(items, 'items from Products-List');
  return (
    <div className={styles.products_list_wrapper}>
      {items.map(item => (
        <div key={item.id} className={styles.products_item_wrapper}>
          <ProductItem {...item}/>
        </div>
      ))}
    </div>
  );
};
