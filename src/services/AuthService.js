import { axiosDB } from './axiosConfig';

class AuthService {
  async authUser(reqBody) {
    const { data } = await axiosDB.post('/auth',  reqBody);
      // "email": "max@gmail.com",
      // "password": "maxMax000"
    return data;
  }
}

export const authService = new AuthService();
