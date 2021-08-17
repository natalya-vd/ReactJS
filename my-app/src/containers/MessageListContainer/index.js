import { useMemo } from 'react';
import { useSelector } from "react-redux";

import { getMessageListSelector } from '../../store/messages/selectors';
import { MessageList } from '../../components/MessageList';

export function MessageListContainer(props) {
    const chatId = props.chatId;

    const getSelectedMessageList = useMemo(() => getMessageListSelector(chatId), [chatId]);
    const messageListInitial = useSelector(getSelectedMessageList);    

    return(
        <MessageList
        messageListInitial={ messageListInitial }
        chatId = { chatId }
        />
    )
} 