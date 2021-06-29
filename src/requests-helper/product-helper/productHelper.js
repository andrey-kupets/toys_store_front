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

const getProductById = async (productId) => {
  const product = await productService.getProductById(productId);
  console.log(product);
};

export {
  getProducts,
  getProductById,
};
