import { authService } from "../../services";
import { toastifyHelper } from "../toastify-helper";
import { errorsEnum } from "../../errors";

export const checkAuth = async (userRequest, language, history, trigger) => {
  try {
    await userRequest();

    trigger();
  } catch ({ response: { status } }) {
    console.log(status)
    if (status === 401) {
      try {
        const refresh_token =  JSON.parse(localStorage.getItem('refresh_token'));
        const data = await authService.refreshToken(refresh_token);

        await userRequest(data.access_token);

        trigger();
      } catch ({ response: { data } }) {
        toastifyHelper.notifyError(errorsEnum[data.customCode][language]);

        history.push('/auth');
      }
    }
  }
};
