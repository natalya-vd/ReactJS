import { ADD_MESSAGE } from './actions';

export const initialState = {
    messagesList: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    }
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                ...state.messagesList[action.payload.chatId].push(action.payload.message),
        };

        default: 
            return state;
    }
};