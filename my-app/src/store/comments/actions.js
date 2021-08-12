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
