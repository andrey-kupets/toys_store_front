import { authService } from "../../services";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";
import { emptyCart, emptyWishlist, setUser, showProductModal, transferDataToCartFromDB } from "../../redux";

export const checkAuth = async (userRequest, language, history, dispatch) => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  try {
    const user = await userRequest(userId);

    // dispatch(transferDataToCartFromDB(user._cart));
    // dispatch(transferDataToWishlistFromDB(user._wishlist));
    dispatch(setUser(user));
    localStorage.setItem('USER', JSON.stringify(user));

  } catch ({ response: { status } }) {
    if (status === 401) {
      try {
        const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
        const data = refresh_token && await authService.refreshToken(refresh_token);

        localStorage.setItem('access_token', JSON.stringify(data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));

        const user = await userRequest(userId, data.access_token);

        // dispatch(transferDataToCartFromDB(user._cart));
        // dispatch(transferDataToWishlistFromDB(user._wishlist));
        dispatch(setUser(user));
        localStorage.setItem('USER', JSON.stringify(user));
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
