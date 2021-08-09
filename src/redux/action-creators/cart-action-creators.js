import { REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_CART } from '../action-types';

export const setProductToCart = (id) => ({ type: ADD_PRODUCT_TO_CART, payload: id });
export const removeProductFromCart = (id) => ({ type: REMOVE_PRODUCT_FROM_CART, payload: id });

