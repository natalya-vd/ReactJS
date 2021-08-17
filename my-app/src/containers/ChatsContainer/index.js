import { useState, useCallback, useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getMessageListSelector } from '../../store/messages/selectors';
import { getChatListSelector } from '../../store/chats/selectors';
import { createAddMessage } from '../../store/messages/actions';

import { Chats } from '../../pages/Chats';
import { messagesApi } from '../../api/request/messages';

import '../../services/firebase';

const userName1 = 'Наташа';

export function ChatsContainer() {
    const { chatId } = useParams();

    const [value, setValue] = useState('');
    const [error, setError] = useState("");

    const getSelectedMessageList = useMemo(() => getMessageListSelector(chatId), [chatId]);
    const messageListInitial = useSelector(getSelectedMessageList);

    const chatList = useSelector(getChatListSelector);
    
    const dispatch = useDispatch();
        
    const addMessage = useCallback(async (e) => {
        e.preventDefault();
        
        dispatch(createAddMessage(chatId, { text: value, author: userName1}))

        try {            
            await messagesApi.createMessages(chatId, { text: value, author: userName1});     
        } catch (e) {
            setError(e);
        }

        setValue(''); 
    }, [messageListInitial, value, dispatch]);

    if(!serchChat(chatList, chatId)) {
        return <Redirect to="/nochat" />;
    };

    function serchChat(listChats, chatId) {
        let message = false;
        listChats.forEach((item) => {
            if(item.chatId === +chatId) {
                message = true;
            };
        });
        return message;
    };

    /**
     * Забирает данные из формы ввода сообщения и записывает в стейт value
     * @param {*} event 
     */
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <Chats 
        chatId={chatId}
        value={value} 
        addMessage={addMessage} 
        handleChange={handleChange}
        />
    )
}