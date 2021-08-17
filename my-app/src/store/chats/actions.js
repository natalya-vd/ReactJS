import { chatsRef } from './../../api/request/chats';

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

export const initChatsTracking = () => (dispatch) => {
    
    // chatsRef.on('child_changed', (snapshot) => {
    //     dispatch(createAddMessage(snapshot.key, snapshot.val()));
    // })

    chatsRef.on('child_added', (snapshot) => {
        dispatch(createAddChat(snapshot.key, snapshot.val()));
    })
}