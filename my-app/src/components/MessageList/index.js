import { Message } from '../Message';

export function MessageList(props) {
    
    return(
        <ul>
            {props.messageListInitial.map((item)=><Message 
            message={item} 
            key={props.chatId}
            />)}
        </ul>
    )
}