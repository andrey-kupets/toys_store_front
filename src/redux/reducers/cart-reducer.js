import { ADD_PRODUCT_TO_CART, EMPTY_CART, REMOVE_PRODUCT_FROM_CART } from '../action-types';
const initFromLs = localStorage.getItem('CART');


const initialState = initFromLs ? JSON.parse(initFromLs) :{
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const { id, count } = payload;
      const activeProductObj = state.productsInCart.find(obj => obj._id === id);
      const otherProductsArr = state.productsInCart.filter(obj => obj._id !== id);

      return !activeProductObj
        ? { ...state, productsInCart: [...state.productsInCart, { _id: action.payload, count: 1 }] }
        : { ...state, productsInCart: [...otherProductsArr, { ...activeProductObj, count: activeProductObj.count + count }]}
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { id, count } = payload;
      const activeProductObj = state.productsInCart.find(obj => obj._id === id);
      const otherProductsArr = state.productsInCart.filter(obj => obj._id !== id);

      return { ...state, productsInCart: [...otherProductsArr, { ...activeProductObj, count: activeProductObj.count - count }]}
    }

    case EMPTY_CART: return {
      ...state,
      productsInCart: []
    }

    default:
      return state;
  }
};

export default reducer;

