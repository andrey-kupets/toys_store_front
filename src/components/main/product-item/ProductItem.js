import React from "react";

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
    <div>
      <div>
        <img src={img} alt={`${name} toy name`}  style={{height: 200, width: 200}}/>
      </div>
      <div>
        <h3>Name: {name}</h3>
        <span>Price: {price}</span><br/>
        <span>Category: {category}</span><br/>
        <span>Type: {type}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}
