import { axiosDB } from './axiosConfig';

class AuthService {
  async authUser(reqBody) {
    const { data } = await axiosDB.post('/auth',  reqBody);
    return data;
  }
}

export const authService = new AuthService();
