import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  SHOW_PRODUCT_MODAL,
  SHOW_WISHLIST_MODAL
} from '../action-types';

const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
const setOneProduct = (payload) => ({ type: SET_ONE_PRODUCT, payload });
const showProductModal = (payload) => ({ type: SHOW_PRODUCT_MODAL, payload });
const showWishlistModal = (payload) => ({ type: SHOW_WISHLIST_MODAL, payload });

export {
  setLoading,
  setProducts,
  setOneProduct,
  showProductModal,
  showWishlistModal
};
