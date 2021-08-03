import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ONE_PRODUCT
} from '../action-types';

const initialState = {
  loading: null,
  products: [],
  product: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return { ...state, loading: action.payload };

    case SET_PRODUCTS: return { ...state, products: action.payload };

    case SET_ONE_PRODUCT: return { ...state, product: action.payload };

    default: return state;
  }
};

export default reducer;
