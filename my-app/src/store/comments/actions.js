import { API_ENDPOINT, endpoints } from '../../api/endpoints';

export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";


export const getCommentsRequest = () => ({
    type: GET_COMMENTS_REQUEST,
});

export const getCommentsSuccess = (data) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: data,
});

export const getCommentsFailure = (err) => ({
    type: GET_COMMENTS_FAILURE,
    payload: err,
});

export const getAllComments = () => async (dispatch) => {
    dispatch(getCommentsRequest());

    try {
        const res = await fetch(`${API_ENDPOINT}${endpoints.comments}`);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
    
        dispatch(getCommentsSuccess(result));
    } catch (err) {
        dispatch(getCommentsFailure(err.message));
    }
}
