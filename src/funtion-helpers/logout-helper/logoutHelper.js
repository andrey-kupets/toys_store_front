import { authService } from "../../services";
import { emptyCart, emptyWishlist, setUser, showProductModal } from "../../redux";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";

export const logout = async () => {
  const access_token = JSON.parse(localStorage.getItem('access_token'));
  try {
    await authService.logout(access_token);
    !!productModal && dispatch(showProductModal(false));
    dispatch(setUser(false));

    localStorage.removeItem('access_token');
    localStorage.removeItem('USER');

    history.push('/');
  } catch ({ response: { status } }) {
    if (status === 401) {
      try {
        const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
        const data = refresh_token && await authService.refreshToken(refresh_token);

        localStorage.setItem('access_token', JSON.stringify(data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));

        await authService.logout(data.access_token);

        !!productModal && dispatch(showProductModal(false));
        dispatch(setUser(false));

        localStorage.removeItem('access_token');
        localStorage.removeItem('USER');

        history.push('/');
      } catch (e) {
        console.log(e);
        toastifyHelper.notifyError(errorsEnum["4010"][language]);

        dispatch(setUser(false));
        dispatch(emptyCart());
        dispatch(emptyWishlist());
        !!productModal && dispatch(showProductModal(false));

        localStorage.clear();

        history.push('/auth');
      }
    }
  }
};
