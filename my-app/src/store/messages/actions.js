//import faker from 'faker';
import { messagesRef } from './../../api/request/messages';

// const userName2 = 'Ксюша'; //робот
// const textUser = `${faker.lorem.paragraph()}`;

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const createAddMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    }
});

// export const addMessageWithMiddleware = (chatId, message) => (dispatch, getState) => {
//     debugger
//     dispatch(createAddMessage(chatId, message));
//     if (message.author !== userName2) {
        
//         const botMessage = { text: textUser, author: userName2};
//         setTimeout(() => {
//             dispatch(createAddMessage(chatId, botMessage))
//         }, 2000);
//     }
// };

export const initPostsTracking = () => (dispatch) => {
    
    // messagesRef.on('child_changed', (snapshot) => {
    //     dispatch(createAddMessage(snapshot.key, snapshot.val()));
    // })

    messagesRef.on('child_added', (snapshot) => {
        dispatch(createAddMessage(snapshot.key, snapshot.val()));
    })
}