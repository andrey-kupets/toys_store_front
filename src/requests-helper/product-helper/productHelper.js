import { productService } from "../../services";

const getProducts = async (setProducts, setLoading, notify, notifyError, searchParams, setPageData, pageData) => {
  try {
    setLoading(true);
    // throw new Error(); // for notifyError() using
    const res = await productService.getProducts(!!searchParams ? searchParams :'');
    // console.log(res);

    const { page } = pageData;
    const limit = 9;
    const totalPages = Math.ceil(res.length / limit);

    !!res.length && setPageData({ page, totalPages });

    setProducts(res.slice((page - 1) * limit, page * limit));
    console.log('ALL PRODUCTS', res);
    console.log('page from helper', page);


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
