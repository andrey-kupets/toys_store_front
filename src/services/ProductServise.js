import { axiosDB } from './axiosConfig';

class ProductService {
  async getProducts(searchParams) {
    // const { data } = await axiosDB.get(`/products`);
    const { data } = await axiosDB.get(`/products?${searchParams}`);
    return data;
  }

  async getProductById(productId) {
    const { data } = await axiosDB.get(`/products/${productId}`);
    return data;
  }
}

export const productService = new ProductService();
