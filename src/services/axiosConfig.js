import axios from 'axios';
import { productService } from "./ProductServise";

export const axiosDB = axios.create({
  baseURL: 'http://localhost:5000',
  // headers: {
  //   Authorization: 'Bearer ...'
  // }
});


// from Service
// {
//   headers: {
//     Authorization: `Bearer ${token}`
//   },
// }


// from products requestHelper setProductById
// const access_token = await localStorage.getItem('access_token')
//
// const res = await productService.getProductById(productId, access_token);
