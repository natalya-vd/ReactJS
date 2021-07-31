import { useState } from 'react';
import List from '@material-ui/core/List';
import faker from 'faker';
import { Chat } from './Chat';

export function ChatList() {
    /**
     * Массив с рандомными пользователями
     */
    const usersChat = makeChatList();
    
    const [chatList, setChatList] = useState(usersChat);
    
    /**
     * Создает чат-лист рандомных пользователей
     * @returns Массив с рандомными данными пользователей
     */
    function makeChatList() {
        let array = [];

        for(let i = 0; i < 5; i++) {
            array.push({
                author: faker.name.firstName(),
                photo: faker.image.avatar(),
                id: faker.datatype.uuid()
            })
        }
        return array;
    };

    return(
        <List>
            {chatList.map((item)=><Chat  itemList={item} key={item.id}/>)}
        </List>
    )
}