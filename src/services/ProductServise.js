import axios from "axios";

export const ProductService = () => {
  return axios.get('http://localhost:5000/products')
}
