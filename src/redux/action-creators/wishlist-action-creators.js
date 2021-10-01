import {
  ADD_PRODUCT_TO_WISHLIST,
  EMPTY_WISHLIST,
  REMOVE_PRODUCT_FROM_WISHLIST,
  TRANSFER_DATA_TO_CART_FROM_DB
} from '../action-types';

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

export const emptyWishlist = () => ({ type: EMPTY_WISHLIST });
export const transferDataToWishlistFromDB = (payload) => ({ type: TRANSFER_DATA_TO_CART_FROM_DB, payload });


