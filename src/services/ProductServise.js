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

  async createProduct(reqBody, access_token) {
    await axiosDB.post('/products', reqBody, {
      headers: {
        Authorization: `${access_token}`
      },
    })
  }
}

export const productService = new ProductService();
