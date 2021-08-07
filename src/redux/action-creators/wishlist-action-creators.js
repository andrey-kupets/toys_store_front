import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../action-types';

const addProductToWishlist = (id) => ({ type: ADD_PRODUCT_TO_WISHLIST, payload });
const removeProductFromWishlist = (id) => ({ type: REMOVE_PRODUCT_FROM_WISHLIST, payload });

export const toggleItem = (id) => {

};
