import { ADD_CHAT, REMOVE_CHAT } from './actions';
import faker from 'faker';

export const initialState = {
    chatsList: [
        {
        chatId: 1,
        author: faker.name.firstName(),
        photo: faker.image.avatar(),
        },

        {
            chatId: 2,
            author: faker.name.firstName(),
            photo: faker.image.avatar(),
        },

        {
            chatId: 3,
            author: faker.name.firstName(),
            photo: faker.image.avatar(),
        },

        {
            chatId: 4,
            author: faker.name.firstName(),
            photo: faker.image.avatar(),
        },

        {
            chatId: 5,
            author: faker.name.firstName(),
            photo: faker.image.avatar(),
        },
    ]
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAT:
            return {
                chatsList: [
                    ...state.chatsList.concat({
                        chatId: +`${state.chatsList.length + 1}`,
                        author: action.payload.name,
                        photo: action.payload.photo,
                    }),
                ],
            };

        case REMOVE_CHAT:
            return {
                chatsList: [
                    ...state.chatsList.filter((chat) => chat.chatId !== action.payload),
                ]
            };

        default: 
            return state;
    }
};