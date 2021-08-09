import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../action-types';

const addProductToWishlist = (id) => ({ type: ADD_PRODUCT_TO_WISHLIST, payload: id });
const removeProductFromWishlist = (id) => ({ type: REMOVE_PRODUCT_FROM_WISHLIST, payload: id });

export const toggleItemInWishlist = (id) => (dispatch, getState) => {
  const { wishlist: { productIdsInWishlist } } = getState();

  const productExistsInWishlist = productIdsInWishlist.includes(id);

  dispatch(productExistsInWishlist
    ? removeProductFromWishlist(id)
    : addProductToWishlist(id)
  );
};
