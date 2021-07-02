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

  async createUser() {
    const { data } = await axiosDB.post('/users', {
      name: "max",
      email: "max@gmail.com",
      password: 'max111',
      _products: [
        {
          _id: "60b231505d469ae5fefc2df0"

        },
        {
          _id: "60b231505d469ae5fefc2df1"
        },
        {
          _id: "60b231505d469ae5fefc2df1"
        }
      ]
    });

    return data;
  }
}

export const userService = new UserService();