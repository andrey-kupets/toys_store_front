import { productService } from "../../services";

const getProducts = async (setProducts, setLoading, notify, notifyError, searchParams, setPageData, pageData) => {
  try {
    setLoading(true);
    // throw new Error(); // for notifyError() using
    const res = await productService.getProductsPerPage(!!searchParams ? searchParams :'');
    const resTotals = await productService.getProductsTotals();

    const { page } = pageData;
    const limit = 9;
    const totalPages = Math.ceil(resTotals.length / limit);

    !!res.length && setPageData({ page, totalPages });

    // setProducts(resTotals.slice((page - 1) * limit, page * limit)); for FRONT only
    setProducts(res);

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
