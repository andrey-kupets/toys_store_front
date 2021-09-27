import { axiosDB } from './axiosConfig';

class OrderService {
  async makeOrder(reqBody, access_token) {
    const { data } = await axiosDB.post('/orders', reqBody,
      // {
      //   headers: {
      //     Authorization: `${access_token}`
      //   },
      // }
      );
    console.log(data, 'makeOrder response');
    return data;
  }
}

export const orderService = new OrderService();
