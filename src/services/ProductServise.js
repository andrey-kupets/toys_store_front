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

  async createProduct(productData, access_token) {
    const reqBody = new FormData();

    for (const field in productData) {
      reqBody.append(field, productData[field]);
    }

    const { data } = await axiosDB.post('/products', reqBody, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${access_token}`
      },
      // data: JSON.stringify(reqBody),
      // data: reqBody,
    });
    return data;
  }
}

export const productService = new ProductService();
