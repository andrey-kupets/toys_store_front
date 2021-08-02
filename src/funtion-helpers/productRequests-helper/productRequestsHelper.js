import { productService } from "../../services";
import { errorsEnum } from "../../errors";
import { toastifyHelper } from "../toastify-helper"
import { endProductsLoading, setPageData, setProducts, startProductsLoading } from "../../redux";

const loadProductsData = async (dispatch, searchParams) => {
  try {
    dispatch(startProductsLoading());

    const { data, page, pages } = await productService.getProducts(!!searchParams ? searchParams :'');

    dispatch(setPageData({ page, pages }));
    dispatch(setProducts(data));

    // toastifyHelper.notify(constants.SUCCESSFUL_RESPONSE[prefLang]);

  } catch (e) {
    console.log(e);
    toastifyHelper.notifyError(errorsEnum["5000"][prefLang]);
  } finally {
    dispatch(endProductsLoading());
  }
};

const loadProductById = async (productId, setProduct, setLoading) => {
  try {
    setLoading(true);

    const res = await productService.getProductById(productId);

    setProduct(res);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
};

export {
  loadProductsData,
  loadProductById,
};

// setProducts(resTotals.slice((page - 1) * limit, page * limit)); for FRONT only
