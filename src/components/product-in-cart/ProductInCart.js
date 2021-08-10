import React from "react";

export const ProductInCart = ({activeProductObj}) => {

  return (
    <div>
      {activeProductObj.productId} - {activeProductObj.count}
    </div>
  );
};
