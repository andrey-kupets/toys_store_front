import { axiosDB } from './axiosConfig';

class ProductService {
  async getProducts(searchParams) {
    // const { data } = await axiosDB(`/products`); // get by default
    const { data } = await axiosDB.get(`/products?${searchParams}`); // for query
    return data;
  }

  async getProductById(productId) {
    const { data } = await axiosDB.get(`/products/${productId}`);
    return data;
  }
}

export const productService = new ProductService();
