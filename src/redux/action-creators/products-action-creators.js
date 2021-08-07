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
import { setLanguage } from "./language-action-creator";

const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
const setOneProduct = (payload) => ({ type: SET_ONE_PRODUCT, payload });
const showProductModal = (payload) => ({ type: SHOW_PRODUCT_MODAL, payload });
const showWishlistModal = (payload) => ({ type: SHOW_WISHLIST_MODAL, payload });


const loadProductsData = (searchParams, language) => async (dispatch) => {
  try {
    // dispatch(setLanguage('ru')); // first language after page refreshing - 'en'
    dispatch(setLoading(true));

    const { data, page, pages } = await productService.getProducts(!!searchParams ? searchParams :'');

    dispatch(setProducts(data));
    dispatch(setPageData({ page, pages }));

    // toastifyHelper.notify(constants.SUCCESSFUL_RESPONSE[language]);

  } catch (e) {
    // dispatch(setLanguage('ru'));
    console.log(e);

    toastifyHelper.notifyError(errorsEnum["5000"][language]);
  } finally {
    dispatch(setLoading(false));
  }
};

const loadProductById = (productId, language) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await productService.getProductById(productId);

    dispatch(setOneProduct(res));
  } catch (e) {
    dispatch(setLanguage('ru'));
    console.log(e);
    toastifyHelper.notifyError(errorsEnum["5000"][language]);
  } finally {
    dispatch(setLoading(false));
  }
};

export {
  showProductModal,
  showWishlistModal,
  loadProductsData,
  loadProductById,
};
