import {
  FETCH_DRDETAIL_START,
  FETCH_DRDETAIL_FAIL,
  FETCH_DRDETAIL_SUCCESS,
} from "./DonationRequestType";

const initialState = {
  loading: false,
  donationRequest: {},
  error: null,
};

function DonationRequestReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRDETAIL_START:
      return { ...state, loading: true };
    case FETCH_DRDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        donationRequest: action.payload,
        error: null,
      };
    case FETCH_DRDETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default DonationRequestReducer;
