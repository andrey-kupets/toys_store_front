import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ONE_PRODUCT,
  SHOW_PRODUCT_MODAL,
  SHOW_WISHLIST_MODAL
} from '../action-types';
import { productService } from "../../services";
import { setPageData } from "./pagination-action-creators";
import { toastifyHelper } from "../../funtion-helpers";
import { errorsEnum } from "../../errors";

const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
const setOneProduct = (payload) => ({ type: SET_ONE_PRODUCT, payload });
const showProductModal = (payload) => ({ type: SHOW_PRODUCT_MODAL, payload });
const showWishlistModal = (payload) => ({ type: SHOW_WISHLIST_MODAL, payload });

const loadProductsData = (searchParams) => async (dispatch, getState) => {
  const { language } = getState();
  try {
    dispatch(setLoading(true));

    const { data, page, pages } = await productService.getProducts(!!searchParams ? searchParams :'');

    console.log(page, 'PAGE');
    console.log(pages, 'PAGES');

    dispatch(setProducts(data));
    dispatch(setPageData({ page, pages }));
  } catch (e) {
    toastifyHelper.notifyError(errorsEnum["5000"][language.language]);
  } finally {
    dispatch(setLoading(false));
  }
};

const loadProductById = (productId) => async (dispatch, getState) => {
  const { language } = getState();
  try {
    dispatch(setLoading(true));

    const res = await productService.getProductById(productId);

    dispatch(setOneProduct(res));
  } catch (e) {
    toastifyHelper.notifyError(errorsEnum["5000"][language.language]);
  } finally {
    dispatch(setLoading(false));
  }
};

export {
  setLoading,
  showProductModal,
  showWishlistModal,
  loadProductsData,
  loadProductById,
};
