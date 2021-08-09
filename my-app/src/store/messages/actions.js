export const ADD_MESSAGE = 'ADD_MESSAGE';

export const createAddMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    }
});