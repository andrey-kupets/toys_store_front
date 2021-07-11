import { productService } from "../../services";

const setProductsData = async (setProducts, setLoading, notify, notifyError, searchParams, setPageData, pageData) => {
  try {
    setLoading(true);
    // throw new Error(); // for notifyError() using

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

    notify();
  } catch (e) {
    console.log(e);
    notifyError();
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
