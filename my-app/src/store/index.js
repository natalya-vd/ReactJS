import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';

const middleware = (store) => (dispatch) => (action) => {
    return dispatch(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }),
    composeEnhancers(applyMiddleware(middleware, thunk)),
);