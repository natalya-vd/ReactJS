export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const createShowMessage = (chatId) => ({
    type: SHOW_MESSAGE,
    payload: chatId
});