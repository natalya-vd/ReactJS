import { db } from '../../services/firebase';

export const chatsRef = db.ref('chats');

export const chatsApi = {
    createChats: (chatId, chat) => {
        return chatsRef.child(chatId).push(chat)
    },
};