import axios from "axios";

export const dbAccess = axios.create({
  baseURL: 'http://localhost:5000',
  // headers: {
  //   Authorization: 'Bearer ...'
  // }
});
