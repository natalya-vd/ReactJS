import { useMemo } from 'react';
import { useSelector } from "react-redux";

import { Message } from '../Message';
import { getMessageListSelector } from '../../store/messages/selectors';

export function MessageList(props) {
    const getSelectedMessageList = useMemo(() => getMessageListSelector(props.chatId), [props.chatId]);
    const messageListInitial = useSelector(getSelectedMessageList);
    
    return(
        <ul>
            {messageListInitial.map((item)=><Message  message={item} key={props.chatId}/>)}
        </ul>
    )
}