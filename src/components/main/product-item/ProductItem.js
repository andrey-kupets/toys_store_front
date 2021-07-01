import React from "react";
import styles from './ProductItem.module.css';

export const ProductItem = (props) => {
  // category: "Игрушки для малышей"
  // description: "- яркая погремушка, благодаря тонкому звуку которой ребенок развивает осязательные, зрительные и двигательные способности, учит причинно-следственные связи."
  // id: "60db7976668005d41cce29a3"
  // img: "https://pampik.com/uploads/product/small/20171212/20171212_1lWT.jpg"
  // name: "Погремушка BabyOno Шарик (672)"
  // price: 42
  // type: "Погремушки"
  // _id: "60db7976668005d41cce29a3"
  const {
    category,
    description,
    img,
    name,
    price,
    type,
  } = props;

  return (
    <div className={styles.product_item}>
      <div className={styles.product_image_wrapper}>
        <img className={styles.product_image} src={img} alt={`${name} toy`}/>
      </div>
      <div>
        <h3>{name}</h3>
        <div>Price: {price} грн.</div>
        <div>Category: {category}</div>
        <div>Type: {type}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}
