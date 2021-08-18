import { Chat } from '../Chat';

import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';

export const ChatListTestIds = {
    click: 'ChatList-click',
}

export function ChatList(props) {
    console.log(props.usersChat)
    return(
        <div>
            <Button 
            variant="outlined" 
            color="primary" 
            onClick={props.addChat}
            data-testid={ChatListTestIds.click}
            >
                Добавить чат
            </Button>
            <List>
                {props.usersChat.map((item) => <Chat  itemList={item} key={item.chatId}/>)}
            </List>
        </div>
    );
};