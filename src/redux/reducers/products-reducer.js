import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  SHOW_PRODUCT_MODAL
} from '../action-types';

const initialState = {
  loading: null,
  products: [],
  product: null,
  productModal: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return { ...state, loading: action.payload };

    case SET_PRODUCTS: return { ...state, products: action.payload };

    case SET_ONE_PRODUCT: return { ...state, product: action.payload };

    case SHOW_PRODUCT_MODAL: return { ...state, productModal: action.payload };

    default: return state;
  }
};

export default reducer;
