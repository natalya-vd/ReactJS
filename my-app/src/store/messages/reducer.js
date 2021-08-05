import { SHOW_MESSAGE } from './actions';

export const initialState = {
    messagesList: [
        {
            name: 'Chat1',
            chatId: 1,
            messages: [{ text: "Привет", author: 'Наташа'}]
        },
        
        {
            name: 'Chat2',
            chatId: 2,
            messages: [{ text: "Привет. Как дела?", author: 'Ксюша'}]
        },
        
        {
            name: 'Chat3',
            chatId: 3,
            messages: [{ text: "Привет", author: 'Наташа'}]
        },
        
        {
            name: 'Chat4',
            chatId: 4,
            messages: [{ text: "Привет. Как дела?", author: 'Ксюша'}]
        },
        
        {
            name: 'Chat5',
            chatId: 5,
            messages: [{ text: "Привет", author: 'Наташа'}]
        }
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MESSAGE:
            return {
                messagesList: [
                    ...state.messagesList.filter((item) => item.chatId === action.payload.chatId),
                ]
            };

        default: 
            return state;
    }
};