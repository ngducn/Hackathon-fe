import { TOAST_FAIL, TOAST_SUCCESS } from "./ToastType";

const initialState = {
  loading: false,
  state: [],
  error: "",
};

function ToastReducer(state = initialState, action) {
  switch (action.type) {
    case TOAST_SUCCESS:
      return {
        loading: false,
        state: action.payload,
        error: "",
        toastShow: true,
      };
    case TOAST_FAIL:
      return {
        loading: false,
        state: [],
        error: true,
        toastShow: true,
      };
    default:
      return state;
  }
}
export default ToastReducer;
