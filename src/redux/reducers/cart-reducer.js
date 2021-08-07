import { SET_PRODUCT_TO_CART } from '../action-types';

const initFromLs = localStorage.getItem('product');

const initialState = initFromLs ? JSON.parse(initFromLs) :{
  oneProductCountInCart: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_TO_CART: return {
      ...state,
      oneProductCountInCart: state.oneProductCountInCart + action.payload
    };

    default: return state;
  }
};

export default reducer;
