import { REMOVE_PRODUCT_FROM_CART, SET_PRODUCT_TO_CART } from '../action-types';

export const setProductToCart = (id) => ({ type: SET_PRODUCT_TO_CART, payload: id });
export const removeProductFromCart = (id) => ({ type: REMOVE_PRODUCT_FROM_CART, payload: id });

