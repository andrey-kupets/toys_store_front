import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ONE_PRODUCT
} from '../action-types';

const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
const setOneProduct = (payload) => ({ type: SET_ONE_PRODUCT, payload });

export {
  setLoading,
  setProducts,
  setOneProduct
};
