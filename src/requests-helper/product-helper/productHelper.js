import { productService } from "../../services";

const getProducts = async (setProducts, setLoading, notify, notifyError, searchParams) => {
  try {
    setLoading(true);
    // throw new Error(); // for notifyError() using
    const res = await productService.getProducts(searchParams);
    console.log(res);
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
