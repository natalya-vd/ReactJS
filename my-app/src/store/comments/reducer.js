import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE } from './actions'

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

export const initialState = {
    comments: [],
    request: STATUSES.IDLE,
    error: null,
    isLoading: true,
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                isLoading: true,
                error: null,
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                request: STATUSES.SUCCESS,
                isLoading: false,
            };
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};