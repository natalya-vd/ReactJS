import faker from 'faker';

const userName2 = 'Ксюша'; //робот
const textUser = `${faker.lorem.paragraph()}`;

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const createAddMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    }
});

export const addMessageWithMiddleware = (chatId, message) => (dispatch, getState) => {
    dispatch(createAddMessage(chatId, message));
    if (message.author !== userName2) {
        
        const botMessage = { text: textUser, author: userName2};
        setTimeout(() => {
            dispatch(createAddMessage(chatId, botMessage))
        }, 2000);
    }
};