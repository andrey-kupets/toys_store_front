import {
  START_PRODUCTS_LOADING,
  END_PRODUCTS_LOADING,
  SET_PRODUCTS
} from '../action-types';

const initialState = {
  products: [],
  loading: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return { ...state, products: action.payload };

    case START_PRODUCTS_LOADING: return { ...state, loading: true };

    case END_PRODUCTS_LOADING: return { ...state, loading: false };

    //
    //   case 'USE_LOADING'

    default: return state;
  }
};

export default reducer;
