import { axiosDB } from './axiosConfig'

class ProductService {
  getProducts() {
    return axiosDB.get('/products');
  }

  getProductById(productId) {
    return axiosDB.get(`/products/${productId}`)
  }

}

export const productService = new ProductService();
