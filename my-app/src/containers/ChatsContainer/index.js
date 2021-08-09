import { useState, useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getMessageListSelector } from '../../store/messages/selectors';
import { addMessageWithMiddleware } from '../../store/messages/actions';

import { Chats } from '../../pages/Chats';

const userName1 = 'Наташа';

export function ChatsContainer() {
    const { chatId } = useParams();

    const [value, setValue] = useState('');

    const messageListInitial = useSelector(getMessageListSelector);
    
    const dispatch = useDispatch();

    const addMessage = useCallback(() => {
        dispatch(addMessageWithMiddleware(chatId, { text: value, author: userName1}));
        setValue('');      
    }, [messageListInitial, value, dispatch]);

    if(!serchChat(messageListInitial, chatId)) {
        return <Redirect to="/nochat" />;
    };

    function serchChat(listChats, chatId) {
        let message = false;
        for(let chat in listChats) {
        if(+chat === +chatId) {
            message = true;
        }
        };
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