import { axiosDB } from './axiosConfig';

class AuthService {
  async authUser(reqBody) {
    const { data } = await axiosDB.post('/auth', reqBody);
    return data;
  }

  async refreshToken(refresh_token) {
    const { data } = await axiosDB.post('/auth/refresh', {}, {
      headers: {
        Authorization: `${refresh_token}`
      },
    });
    return data;
  }

  async logout(access_token) {
    await axiosDB.post('/auth/logout', {}, {
      headers: {
        Authorization: `${access_token}`
      },
    });
  }
}

export const authService = new AuthService();
