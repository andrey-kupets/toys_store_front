import { authService } from "../../services";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";
import { emptyCart, emptyWishlist, setUser, showProductModal, transferDataToCartFromDB } from "../../redux";

export const checkAuth = async (userRequest, language, history, dispatch) => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  try {
    const e = await userRequest(userId) || {};
    console.log(e, 'ttttttttttttttttttttttttt')
    // dispatch(transferDataToCartFromDB(await userRequest(userId)?._cart));
    // dispatch(transferDataToWishlistFromDB(await userRequest(userId)?._wishlist));
    dispatch(setUser(e));

  } catch ({ response: { status } }) {
    if (status === 401) {
      try {
        const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
        const data = refresh_token && await authService.refreshToken(refresh_token);

        localStorage.setItem('access_token', JSON.stringify(data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));

        const e = await userRequest(userId, data.access_token) || {};
        console.log(e, 'ttttttttttttttttttttttttt')
        // dispatch(transferDataToCartFromDB(e?._cart));
        // dispatch(transferDataToWishlistFromDB(await userRequest(userId)?._wishlist));
      } catch ({ response: { data } }) {
        toastifyHelper.notifyError(errorsEnum[data.customCode][language]);

        dispatch(setUser(false));
        dispatch(emptyCart());
        dispatch(emptyWishlist());
        dispatch(showProductModal(false));
        history.push('/auth');
      }
    }
  }
};

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

