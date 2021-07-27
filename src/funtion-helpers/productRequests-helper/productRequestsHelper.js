import { productService } from "../../services";
import { constants } from "../../constants";
import { errorsEnum } from "../../errors";

const setProductsData = async (setProducts, setLoading, notify, notifyError, searchParams, setPageData, pageData) => {
  let prefLang = 'en'; // todo redux
  try {
    setLoading(true);

    const {
      data,
      page,
      // limit,
      // count,
      pages
    } = await productService.getProducts(!!searchParams ? searchParams :'');

    !!data.length && setPageData({
      ...pageData,
      page: +page,
      totalPages: +pages
    });

    // setProducts(resTotals.slice((page - 1) * limit, page * limit)); for FRONT only
    setProducts(data);

    // notify(constants.SUCCESSFUL_RESPONSE[prefLang]);
  } catch (e) {
    console.log(e);
    notifyError(errorsEnum["5000"][prefLang]);
  } finally {
    setLoading(false);
  }
};

const setProductById = async (productId, setProduct, setLoading) => {
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
  setProductsData,
  setProductById,
};
