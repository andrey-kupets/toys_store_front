import { authService } from "../../services";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";

export const checkAuth = async (updateUserItem, userItem, language, history, trigger, payload) => {
  const access_token =  JSON.parse(localStorage.getItem('access_token'));

  try {
    if (!access_token) return history.push('/auth');

    await updateUserItem(access_token);

    trigger(payload);
  } catch ({ response: { status } }) {
    console.log(status)
    if (status === 401) {
      try {
        const refresh_token =  JSON.parse(localStorage.getItem('refresh_token'));
        const data = await authService.refreshToken(refresh_token);

        await updateUserItem(data.access_token);

        trigger(payload);
      } catch ({ response: { data } }) {
        toastifyHelper.notifyError(errorsEnum[data.customCode][language]);

        history.push('/auth');
      }
    }
  }
};
