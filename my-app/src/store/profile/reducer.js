import { PROFILE_ACTION } from './actions';


export const profileInitialState = {
    checked: false,
};

export const profileReducer = (state = profileInitialState, action) => {
    switch(action.type) {
        case PROFILE_ACTION:
            return {
                ...state,
                checked: !state.checked
            }
        default:
            return state
    };
};