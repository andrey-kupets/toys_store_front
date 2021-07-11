import { axiosDB } from './axiosConfig';

class ProductService {
  async getProductsPerPage(searchParams) {
    // const { data } = await axiosDB.get(`/products`);
    const { data } = await axiosDB.get(`/products?${searchParams}`); // for query
    return data;
  }

  async getProductsTotals() {
    const { data } = await axiosDB.get(`/products/totals`); // for query
    return data;
  }

  async getProductById(productId) {
    const { data } = await axiosDB.get(`/products/${productId}`);
    return data;
  }
}

export const productService = new ProductService();
