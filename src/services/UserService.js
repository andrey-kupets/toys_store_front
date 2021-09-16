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

  async updateOneUser(userId, reqBody, access_token) {
    const { data } = await axiosDB.put(`/users/${userId}`, reqBody,
      {
        // body: reqBody,
        headers: {
          Authorization: `${access_token}`
        },
      });
    console.log(data, 'data ')
    return data;
  }
}

export const userService = new UserService();

// export const checkAuth = async (setSource, userRequest, language, history) => {
//   const userId = JSON.parse(localStorage.getItem('userId'));
//   try {
//     const access_token = JSON.parse(localStorage.getItem('access_token'));
//
//     if (!access_token) return history.push('/auth');
//
//     setSource();
//
//     await userRequest(userId, access_token);
//   } catch ({ response: { status } }) {
//     console.log(status)
//     if (status === 401) {
//       try {
//         const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
//         const data = refresh_token && await authService.refreshToken(refresh_token);
//
//         localStorage.setItem('access_token', JSON.stringify(data.access_token));
//         localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));
//
//         await userRequest(userId, data.access_token);
//       } catch ({ response: { data } }) {
//         toastifyHelper.notifyError(errorsEnum[data.customCode][language]);
//
//         history.push('/auth');
//       }
//     }
//   }
// };

// const onModalClick = async (payload) => {
//   if (payload && !activeProductObj) {
//     const fillCart = (source = product.id) => {
//       return dispatch(setProductToCart(source));
//     };
//
//     const cart = JSON.parse(localStorage.getItem('CART'));
//
//     const updateUserItem = async (userId, token) => {
//       return await userService.updateOneUser(userId, { _cart: cart.productsInCart }, token);
//     };
//
//     await checkAuth(fillCart, updateUserItem, language, history);
//   }
//
//   dispatch(showProductModal(payload));
// };

// const onCounterClick = async (payload) => {
//   const fillCart = (source = 'payload') => dispatch(setProductToCart('source'));
//
//   const cart = JSON.parse(localStorage.getItem('CART'));
//
//   const updateUserItem = async (userId, token) => {
//     return await userService.updateOneUser(userId, { _cart: cart.productsInCart }, token);
//   };
//
//   await checkAuth(fillCart, updateUserItem, language, history);
// };
