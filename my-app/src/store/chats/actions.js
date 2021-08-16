export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';

export const createAddChat = (name, photo) => ({
    type: ADD_CHAT,
    payload: {name, photo}
});

export const createRemoveChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId
});