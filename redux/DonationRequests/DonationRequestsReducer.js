import {
  FETCH_DRALL_START,
  FETCH_DRALL_FAIL,
  FETCH_DRALL_SUCCESS,
} from "./DonationRequestsType";

const initialState = {
  loading: false,
  donationRequests: [],
  error: null,
};

function DonationRequestReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRALL_START:
      return { ...state, loading: true };
    case FETCH_DRALL_SUCCESS:
      return {
        ...state,
        loading: false,
        donationRequests: action.payload,
        error: null,
      };
    case FETCH_DRALL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default DonationRequestReducer;
