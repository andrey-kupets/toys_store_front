import { axiosDB } from './axiosConfig';

class UserService {
  async getUsers() {
    const { data } = await axiosDB('/users'); // get by default
    return data;
  }

  async getUserById(userId) {
    const { data } = await axiosDB(`/users/${userId}`); // get by default
    return data;
  }

  async createUser(reqBody) {
    const { data } = await axiosDB.post('/users', reqBody);
    return data;
  }
}

export const userService = new UserService();
