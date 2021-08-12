import { TOAST_SUCCESS, TOAST_FAIL } from "./ToastType";

export const toastSuccess = (e) => {
  return {
    type: TOAST_SUCCESS,
    payload: e,
  };
};
export const toastFail = () => {
  return {
    type: TOAST_FAIL,
    payload: Error,
  };
};
