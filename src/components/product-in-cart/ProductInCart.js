import React from "react";
import { useSelector } from "react-redux";

export const ProductInCart = ({activeProductObj}) => {
  const { products, productsInCart } = useSelector(
    ({ products, language, cart }) => ({ ...products, ...language, ...cart })
  );


  return (
    <div>
      {activeProductObj._id} - {activeProductObj.count}
    </div>
  );
};
