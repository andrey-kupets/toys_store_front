import { axiosDB } from './axiosConfig';

class ProductService {
  async getProducts() {
    const { data } = await axiosDB.get('/products-list');
    return data;
  }

  async getProductById(productId) {
    const { data } = await axiosDB.get(`/products/${productId}`);
    return data;
  }
}

export const productService = new ProductService();
