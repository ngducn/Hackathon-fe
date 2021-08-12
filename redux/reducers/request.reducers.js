import * as types from "../constants/request.constants"

const initialState = {
    "loading": false,
    "data": [],
    "totalPages": null,
    "selectedRequest": {},
}


const requestsReducer = (state = initialState, action) => {
    const { type, payload} = action;

    switch (type) {
        case types.GET_REQUESTS_REQUEST:
            return {...state, "loading": true};
        case types.GET_REQUESTS_SUCCESS:
            return {...state, "loading": false, "data": payload.requests, "totalPages": payload.totalPages};
        case types.GET_REQUESTS_FAILURE:
            return {...state, "loading": false};
        default:
            return state;
    }
};

export default requestsReducer;