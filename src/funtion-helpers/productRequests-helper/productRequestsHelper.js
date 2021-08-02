import { productService } from "../../services";
import { errorsEnum } from "../../errors";
import { toastifyHelper } from "../toastify-helper"
import { setLoading, setPageData, setProducts } from "../../redux";
import { constants } from "../../constants"; // for notify

const loadProductsData = async (dispatch, searchParams) => {
  let prefLang = 'en'; // todo redux

  try {
    dispatch(setLoading(true));

    const { data, page, pages } = await productService.getProducts(!!searchParams ? searchParams :'');

    dispatch(setProducts(data));
    dispatch(setPageData({ page, pages }));

    // toastifyHelper.notify(constants.SUCCESSFUL_RESPONSE[prefLang]);

  } catch (e) {
    console.log(e);
    toastifyHelper.notifyError(errorsEnum["5000"][prefLang]);
  } finally {
    dispatch(setLoading(false));
  }
};

const loadProductById = async (productId, setProduct, setLoading) => {
  let prefLang = 'en'; // todo redux

  try {
    setLoading(true);

    const res = await productService.getProductById(productId);

    setProduct(res);
  } catch (e) {
    console.log(e);
    toastifyHelper.notifyError(errorsEnum["5000"][prefLang]);
  } finally {
    setLoading(false);
  }
};

export {
  loadProductsData,
  loadProductById,
};

// setProducts(resTotals.slice((page - 1) * limit, page * limit)); for FRONT only
