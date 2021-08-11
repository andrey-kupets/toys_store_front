import React from "react";

export const ProductInCart = ({activeProductObj}) => {

  return (
    <div>
      {activeProductObj._id} - {activeProductObj.count}
    </div>
  );
};
