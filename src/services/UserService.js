import { axiosDB } from './axiosConfig';
import { authService } from "./AuthService";
import { showProductModal } from "../redux";
import { toastifyHelper } from "../funtion-helpers";
import { errorsEnum } from "../errors";

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

  async updateOneUser(userId, reqBody, access_token) {
    const { data } = await axiosDB.put(`/users/${userId}`, reqBody,
      {
        // body: reqBody,
        headers: {
          Authorization: `${access_token}`
        },
      });
    return data;
  }
}

export const userService = new UserService();

// const checkAuth = async (updateUserItem, userItem, language, trigger) => {
//   const access_token = JSON.parse(localStorage.getItem('access_token'));
//
//   try {
//     if (!access_token) {
//       history.push('/auth');
//       return;
//     }
//
//     updateUserItem(access_token);
//     trigger();
//   } catch ({ response: { status } }) {
//     if (status === 401) {
//       try {
//         const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
//         const data = await authService.refreshToken(refresh_token);
//
//         await updateUserItem(data.access_token);
//
//       } catch ({ response: { data } }) {
//         toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
//
//         history.push('/auth');
//       }
//     }
//   }
// }

