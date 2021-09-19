import React from "react";

export const ProductInCart = ({ image, name, price }) => {
  return (
    <div>
      { image } - { name } - { price }
    </div>
  );
};
