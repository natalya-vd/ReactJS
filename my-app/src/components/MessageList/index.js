import { useSelector } from "react-redux";

import { Message } from '../Message';
import { getMessageListSelector } from '../../store/messages/selectors';

export function MessageList(props) {
    const messageListInitial = useSelector(getMessageListSelector);
    
    return(
        <ul>
            {messageListInitial[props.chatId].map((item, index)=><Message  message={item} key={index}/>)}
        </ul>
    )
}