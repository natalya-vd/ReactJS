import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { createAddChat } from '../../store/chats/actions';
import { getChatListSelector } from '../../store/chats/selectors';
import { ChatList } from '../../components/ChatList';

import faker from 'faker';

export function ChatListContainer() {
    const usersChat = useSelector(getChatListSelector);

    const dispatch = useDispatch();

    const addChat = useCallback(() => {
        dispatch(createAddChat(faker.name.firstName(), faker.image.avatar()))
    }, [dispatch]);

    return(
        <ChatList 
        addChat={ addChat }
        usersChat={ usersChat }
        />
    )
}