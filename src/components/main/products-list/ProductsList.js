import React from "react";
import styles from '../Main.module.css';

export const ProductsList = ({ items }) => {
  console.log(items, 'items from Products-List');
  return (
    <div className={styles.products_list}>
      {items.map(item => <img key={item.id} style={{height: 200, width: 200}} src={item.img} alt="item"/>)}
    </div>
  );
};
