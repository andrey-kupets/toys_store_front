import { ADD_ID_TO_CART, ADD_PRODUCT_COUNT, SET_PRODUCT_OBJ_TO_CART, SET_PRODUCT_TO_CART } from '../action-types';

const initFromLs = localStorage.getItem('CART');

const initialState = initFromLs ? JSON.parse(initFromLs) :{

  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT_OBJ_TO_CART: {
      const { id, count } = payload;
      const activeProduct = state.productsInCart.find(obj => obj.productId === id);
      const prevArray = state.productsInCart.filter(obj => obj.productId !== id);
      console.log(obj)
      return !obj
        ? { ...state, productsInCart: [...state.productsInCart, { productId: action.payload, count: 1 }] }
        : { ...state, productsInCart: [...prevArray, { ...activeProduct, count: activeProduct.count + count }]}
    }

    // case ADD_PRODUCT_COUNT: {
    //   const {id, count} = payload;
    //   const obj = state.productsInCart.find(obj => obj.productId === id);
    //   obj.count += count;
    //   return { ...state, productsInCart: [...state.productsInCart]};
    // }

    default:
      return state;
  }
};

export default reducer;

