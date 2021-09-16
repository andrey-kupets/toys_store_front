import { authService } from "../../services";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";
import { emptyCart, setUser, showProductModal } from "../../redux";

export const checkAuth = async (userRequest, language, history, dispatch) => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  try {
    await userRequest(userId);
  } catch ({ response: { status } }) {
    console.log(status)
    if (status === 401) {
      try {
        const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
        const data = refresh_token && await authService.refreshToken(refresh_token);

        localStorage.setItem('access_token', JSON.stringify(data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));

        await userRequest(userId, data.access_token);
      } catch ({ response: { data } }) {
        toastifyHelper.notifyError(errorsEnum[data.customCode][language]);

        dispatch(setUser(false));
        dispatch(emptyCart());
        dispatch(showProductModal(false));
        history.push('/auth');
      }
    }
  }
};
