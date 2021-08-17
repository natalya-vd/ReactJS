import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { createAddChat } from '../../store/chats/actions';
import { getChatListSelector } from '../../store/chats/selectors';
import { ChatList } from '../../components/ChatList';
import { chatsApi } from '../../api/request/chats';

import faker from 'faker';

export function ChatListContainer(props) {
    const usersChat = useSelector(getChatListSelector);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const addChat = useCallback(async (e) => {
        dispatch(createAddChat(faker.name.firstName(), faker.image.avatar()))

        try {           
            await chatsApi.createChats(props.chatId, {name: faker.name.firstName(), photo: faker.image.avatar()});     
        } catch (e) {
            setError(e);
        }
    }, [dispatch]);

    return(
        <ChatList 
        addChat={ addChat }
        usersChat={ usersChat }
        />
    )
}