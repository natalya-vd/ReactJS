import { getCommentsRequest, getCommentsSuccess, getCommentsFailure } from '../../store/comments';
import { API_ENDPOINT, endpoints } from '../endpoints';

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