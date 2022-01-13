import toast from "@components/toast";
// import { toggleInternetModal } from "@redux/actions/internet";
import store from "@redux/store";
// import axios from "axios";

const errorHandler = async (err: any) => {
  let errorStatus = err?.response?.status ? err.response.status : 500;
  let message = err?.response?.data?.message;
  return new Promise(() => {
    if (err) {
      if (err.toJSON().message === "Network Error") {
        const dispatch = store.dispatch;
      } else if (!err?.response) {
      } else {
        switch (errorStatus) {
          case 400:
            toast("error", message);
            break;
          case 401:
            // logout();
            break;
          case 403:
            toast("error", message);
            // logout();
            break;
          case 503:
            toast("error", "Sorry! Server Error. Please try again.");
            break;
          case 500:
            toast("error", "Sorry! Server Error. Please try again.");
            break;
          case 502:
            toast("error", err?.data?.message);
            break;
          case 409:
            toast("error", message);
            break;
          case 404:
            toast("error", message);
            break;

          default:
            err?.data?.message && toast("error", err?.data?.message);
            break;
        }
      }
    } else {
      //toast error message
      throw err;
    }
  });
};
export default errorHandler;
