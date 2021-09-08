import React from "react";
import { useSelector } from "react-redux";

export const ProductInCart = ({activeProductObj}) => {
  const { products, productsInCart } = useSelector(
    ({ products, cart }) => ({ ...products, ...cart })
  );

  return (
    <div>
      {activeProductObj._id} - {activeProductObj.count}
    </div>
  );
};
