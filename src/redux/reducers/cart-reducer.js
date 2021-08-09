import { SET_PRODUCT_TO_CART } from '../action-types';

const initFromLs = localStorage.getItem('CART');

const initialState = initFromLs ? JSON.parse(initFromLs) :{
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCT_TO_CART: {
      const { id, count } = payload;
      const activeProduct = state.productsInCart.find(obj => obj.productId === id);
      const prevArray = state.productsInCart.filter(obj => obj.productId !== id);

      return !activeProduct
        ? { ...state, productsInCart: [...state.productsInCart, { productId: action.payload, count: 1 }] }
        : { ...state, productsInCart: [...prevArray, { ...activeProduct, count: activeProduct.count + count }]}
    }

    default:
      return state;
  }
};

export default reducer;

