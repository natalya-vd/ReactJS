import { ADD_MESSAGE } from './actions';

export const initialState = {
    // messagesList: [
    //     {
    //         name: 'Chat1',
    //         chatId: 1,
    //         messages: [{ text: "Привет", author: 'Наташа'}]
    //     },
        
    //     {
    //         name: 'Chat2',
    //         chatId: 2,
    //         messages: [{ text: "Привет. Как дела?", author: 'Ксюша'}]
    //     },
        
    //     {
    //         name: 'Chat3',
    //         chatId: 3,
    //         messages: [{ text: "Привет", author: 'Наташа'}]
    //     },
        
    //     {
    //         name: 'Chat4',
    //         chatId: 4,
    //         messages: [{ text: "Привет. Как дела?", author: 'Ксюша'}]
    //     },
        
    //     {
    //         name: 'Chat5',
    //         chatId: 5,
    //         messages: [{ text: "Привет", author: 'Наташа'}]
    //     }
    // ]

    messagesList: {
        1: [{ text: "Привет", author: 'Наташа'}],
        2: [{ text: "Привет. Как дела?", author: 'Ксюша'}],
        3: [{ text: "Привет", author: 'Наташа'}],
        4: [{ text: "Привет. Как дела?", author: 'Ксюша'}],
        5: [{ text: "Привет", author: 'Наташа'}],
    }
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                // messagesList: {
                //     ...state,
                //     ...state.messagesList[action.payload.chatId].push(action.payload.message),
                // }

                ...state,
                ...state.messagesList[action.payload.chatId].push(action.payload.message),
        };

        default: 
            return state;
    }
};