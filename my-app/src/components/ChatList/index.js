import { useState } from 'react';

import { Chat } from '../Chat';
import { useChats } from './hooks/useChats';

import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import faker from 'faker';

export function ChatList() {
    const usersChatInit = useChats();
    const [usersChat, setUsersChat] = useState(usersChatInit);

    function addChat() {        
        setUsersChat(
            usersChat.concat({
                author: faker.name.firstName(),
                photo: faker.image.avatar(),
                id: usersChat.length + 1
            })
        );
    };

    function deletChat(e) {
        setUsersChat(
            usersChat.filter((item) => {
                return item.id !== +e.target.ownerDocument.activeElement.id;
            })
        );
    };

    return(
        <div>
            <Button variant="outlined" color="primary" onClick={addChat}>
                Добавить чат
            </Button>
            <List>
                {usersChat.map((item)=><Chat  itemList={item} key={item.id} deletChat={deletChat}/>)}
            </List>
        </div>
    );
};