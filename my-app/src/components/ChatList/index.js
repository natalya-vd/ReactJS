import { Chat } from '../Chat';
import { useChats } from './hooks/useChats';

import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';

export function ChatList() {
    const usersChat = useChats();
        
    return(
        <div>
            <Button variant="outlined" color="primary">
                Добавить чат
            </Button>
            <List>
                {usersChat.map((item)=><Chat  itemList={item} key={item.id}/>)}
            </List>
        </div>
    );
};