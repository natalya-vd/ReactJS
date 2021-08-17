import { db } from '../../services/firebase';

export const messagesRef = db.ref('messages');

export const messagesApi = {
    createMessages: (chatId, message) => {
        return messagesRef.child(chatId).push(message)
    },
};