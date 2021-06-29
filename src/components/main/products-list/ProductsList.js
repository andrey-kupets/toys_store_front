import React from "react";
import styles from '../Main.module.css';

export const ProductsList = ({ items }) => {
  console.log(items, 'items from Products-List');
  return (
    <div className={styles.products_container}>
      ProductsList
    </div>
  );
};
