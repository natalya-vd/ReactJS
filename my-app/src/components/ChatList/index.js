import { Chat } from '../Chat';

import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';

export function ChatList(props) {
    return(
        <div>
            <Button 
            variant="outlined" 
            color="primary" 
            onClick={props.addChat}>
                Добавить чат
            </Button>
            <List>
                {props.usersChat.map((item) => <Chat  itemList={item} key={item.chatId}/>)}
            </List>
        </div>
    );
};