import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Chat } from '../Chat';
import { createAddChat } from '../../store/chats/actions';
import { getChatListSelector } from '../../store/chats/selectors';

import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import faker from 'faker';

export function ChatList() {
    const usersChat = useSelector(getChatListSelector);

    const dispatch = useDispatch();

    const addChat = useCallback(() => {
        dispatch(createAddChat(faker.name.firstName(), faker.image.avatar()))
    }, [dispatch]);

    return(
        <div>
            <Button 
            variant="outlined" 
            color="primary" 
            onClick={addChat}>
                Добавить чат
            </Button>
            <List>
                {usersChat.map((item) => <Chat  itemList={item} key={item.chatId}/>)}
            </List>
        </div>
    );
};