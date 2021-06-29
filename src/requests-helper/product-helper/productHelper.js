import { productService } from "../../services";

const getProducts = async () => {
  const products = await productService.getProducts();
  console.log(products);
};

const getProductById = async (productId) => {
  const product = await productService.getProductById(productId);
  console.log(product);
};

export {
  getProducts,
  getProductById,
};
