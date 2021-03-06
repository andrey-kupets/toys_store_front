import { axiosDB } from './axiosConfig';

class OrderService {
  async makeOrder(reqBody, access_token) {
    const { data } = await axiosDB.post('/orders', reqBody,
      // {       // checkAuth run straight before it
      //   headers: {
      //     Authorization: `${access_token}`
      //   },
      // }
      );
    return data;
  }
}

export const orderService = new OrderService();
