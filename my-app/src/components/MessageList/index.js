import { Message } from '../Message';

export function MessageList(props) {
    return(
        <ul>
            {props.list.map((item, index)=><Message  message={item} key={index}/>)}
        </ul>
    )
}