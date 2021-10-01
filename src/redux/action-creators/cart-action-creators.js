import { REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_CART, EMPTY_CART, TRANSFER_DATA_TO_CART_FROM_DB } from '../action-types';

export const setProductToCart = (id) => ({ type: ADD_PRODUCT_TO_CART, payload: id });
export const removeProductFromCart = (id) => ({ type: REMOVE_PRODUCT_FROM_CART, payload: id });
export const emptyCart = () => ({ type: EMPTY_CART });
export const transferDataToCartFromDB = (payload) => ({ type: TRANSFER_DATA_TO_CART_FROM_DB, payload });

