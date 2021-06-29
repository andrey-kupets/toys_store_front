import { productService } from "../../services";

const getProducts = async () => {
  return await productService.getProducts();
};

const getProductById = async (productId) => {
  const product = await productService.getProductById(productId);
  console.log(product);
};

export {
  getProducts,
  getProductById,
};
