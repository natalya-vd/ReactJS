import { useSelector } from "react-redux";

import { Message } from '../Message';
import { getMessageListSelector } from '../../store/messages/selectors';

export function MessageList(props) {
    const messageListInitial = useSelector(getMessageListSelector);
    //Получаю сообщения из стора для отрисовки и отправляю через пропс в компонент 1-го сообщения
    return(
        <ul>
            {messageListInitial[props.chatId].map((item, index)=><Message  message={item} key={index}/>)}
        </ul>
    )
}