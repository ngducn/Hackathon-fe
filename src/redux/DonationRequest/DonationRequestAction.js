import {
  FETCH_DRDETAIL_START,
  FETCH_DRDETAIL_FAIL,
  FETCH_DRDETAIL_SUCCESS,
} from "./DonationRequestType";

const getDonationRequest = (id) => async (dispatch) => {
  dispatch({ type: FETCH_DRDETAIL_START, payload: null });
  try {
    const res = await fetch(`http://localhost:5000/donation_requests/${id}`);
    const json = await res.json();
    console.log(json);
    dispatch({
      type: FETCH_DRDETAIL_SUCCESS,
      payload: json.data.request,
    });
  } catch (error) {
    dispatch({ type: FETCH_DRDETAIL_FAIL, payload: error });
  }
};

export { getDonationRequest };
