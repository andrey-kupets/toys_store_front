import { productService } from "../../services";

const getProducts = async (setProducts, setLoading, notify, notifyError, searchParams, setPageData) => {
  try {
    setLoading(true);
    // throw new Error(); // for notifyError() using
    const res = await productService.getProducts(!!searchParams ? searchParams : '');
    // console.log(res);

    const page = 1;
    const limit = 9;
    const totalPages = Math.ceil(res.length / limit);

    setProducts(res);
    !!res.length && setPageData({page, totalPages});
    notify();
  } catch (e) {
    console.log(e);
    notifyError();
  } finally {
    setLoading(false);
  }
};

const getProductById = async (productId, setProduct, setLoading) => {
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
  getProducts,
  getProductById,
};
