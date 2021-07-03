import { productService } from "../../services";

const getProducts = async (setProducts, setLoading) => {
  try {
    setLoading(true);
    const res = await productService.getProducts();
    setProducts(res);
  } catch (e) {
    console.log(e);
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
