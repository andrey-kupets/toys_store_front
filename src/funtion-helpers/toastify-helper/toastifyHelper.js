import { toast } from "react-toastify";

export const toastifyHelper = {
  notify: (responseMsg) => toast.success(responseMsg, {position: "top-right"}),
  notifyError: (errorMsg) => toast.error(errorMsg),
};
