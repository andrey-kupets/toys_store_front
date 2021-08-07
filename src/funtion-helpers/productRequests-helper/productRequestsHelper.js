import { productService } from "../../services";
import { errorsEnum } from "../../errors";
import { toastifyHelper } from "../toastify-helper"
import { setLanguage, setLoading, setOneProduct, setPageData, setProducts } from "../../redux";
import { constants } from "../../constants"; // for notify

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
  loadProductsData,
  loadProductById,
};

// setProducts(resTotals.slice((page - 1) * limit, page * limit)); for FRONT only
