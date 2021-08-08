import { ADD_ID_TO_CART, ADD_PRODUCT_COUNT, SET_PRODUCT_OBJ_TO_CART, SET_PRODUCT_TO_CART } from '../action-types';

const initFromLs = localStorage.getItem('CART');

const initialState = initFromLs ? JSON.parse(initFromLs) :{
  // oneProductCountInCart: 0,
  productsIdsInCart: [],
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_PRODUCT_TO_CART:
    //   return {
    //     ...state,
    //     oneProductCountInCart: state.oneProductCountInCart + action.payload
    //   };

    case ADD_ID_TO_CART: return {
      ...state,
      productsIdsInCart: [ ...state.productsIdsInCart, action.payload ]
    };

    case SET_PRODUCT_OBJ_TO_CART: return {
      ...state,
      productsInCart: [ ...state.productsInCart, { productId : action.payload, count: 1 } ]
    };

    case ADD_PRODUCT_COUNT: return {
      ...state,
      productsInCart: state.productsInCart
        .filter(obj => obj.productId === action.payload)
        .map(item => {
          item.count += 1;
          return item;
        })
    };

    default:
      return state;
  }
};

export default reducer;

