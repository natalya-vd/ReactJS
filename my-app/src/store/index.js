import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { commentsReducer } from './comments';

const persistConfig = {
    key: 'ChatGB',
    storage,
};

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    comments: commentsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return dispatch(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(middleware, thunk))
);

export const persistor = persistStore(store);