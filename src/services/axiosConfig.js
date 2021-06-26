import axios from 'axios';

export const axiosDB = axios.create({
  baseURL: 'http://localhost:5000',
  // headers: {
  //   Authorization: 'Bearer ...'
  // }
});
