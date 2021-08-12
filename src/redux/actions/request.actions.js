import api from "../../apiService";
import * as types from "../contants/request.constants";


const getAllRequests = (page, limit) => async (dispatch) => {

    dispatch({type: types.GET_REQUESTS_REQUEST, payload: null});
    try {
        let url = `http://localhost:5000/donation_requests?page=${page}&limit=${limit}`;
        console.log(url);
        const res = await api.get(url);
        dispatch({ type: types.GET_REQUESTS_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: types.GET_REQUESTS_FAILURE, payload: error})
    }
};

export const requestActions = {getAllRequests}