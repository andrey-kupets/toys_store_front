import React from "react";
import styles from './ProductItem.module.css';

export const ProductItem = (props) => {
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
      {/*may so*/}
      {/*<div*/}
      {/*  style={{*/}
      {/*    backgroundRepeat: 'no-repeat',*/}
      {/*    backgroundSize: '100%',*/}
      {/*    backgroundPosition: 'center',*/}
      {/*    height: 300,*/}
      {/*    width: '100%',*/}
      {/*    backgroundImage: `url(${img})`*/}
      {/*  }}>*/}
      {/*</div>*/}
      <div className={styles.product_image_wrapper}>
        <img className={styles.product_image} src={img} alt={`${name} toy`}/>
      </div>
      <div>
        <h3>{name}</h3>
        <span>Price: {price} грн.</span><br/>
        {/*<span>Category: {category}</span><br/>*/}
        {/*<span>Type: {type}</span>*/}
        <p className={styles.product_item_description}>{description}</p>
      </div>
    </div>
  )
}
