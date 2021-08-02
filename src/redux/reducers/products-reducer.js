import {
  SET_LOADING,
  SET_PRODUCTS
} from '../action-types';

const initialState = {
  loading: null,
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return { ...state, loading: action.payload };

    case SET_PRODUCTS: return { ...state, products: action.payload };

    default: return state;
  }
};

export default reducer;
