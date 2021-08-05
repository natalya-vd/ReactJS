import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);