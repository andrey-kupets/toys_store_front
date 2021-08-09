import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../action-types';

const initFromLs = localStorage.getItem('CART');

const initialState = initFromLs ? JSON.parse(initFromLs) :{
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const { id, count } = payload;
      const activeProductObj = state.productsInCart.find(obj => obj.productId === id);
      const otherProductsArr = state.productsInCart.filter(obj => obj.productId !== id);

      return !activeProductObj
        ? { ...state, productsInCart: [...state.productsInCart, { productId: action.payload, count: 1 }] }
        : { ...state, productsInCart: [...otherProductsArr, { ...activeProductObj, count: activeProductObj.count + count }]}
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { id, count } = payload;
      const activeProductObj = state.productsInCart.find(obj => obj.productId === id);
      const otherProductsArr = state.productsInCart.filter(obj => obj.productId !== id);

      return { ...state, productsInCart: [...otherProductsArr, { ...activeProductObj, count: activeProductObj.count - count }]}
    }

    default:
      return state;
  }
};

export default reducer;

