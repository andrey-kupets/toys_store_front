import {
  SET_LOADING,
  SET_PRODUCTS
} from '../action-types';

const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

export {
  setLoading,
  setProducts
};
