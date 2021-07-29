import { useState, useCallback } from 'react';
import faker from 'faker';

export function useChats() {
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
                id: i+1
            })
        }
        return array;
    };

    // const addChat = useCallback(() => {
    //     setChatList(chatList.concat({
    //         author: faker.name.firstName(),
    //         photo: faker.image.avatar(),
    //         id: chatList.length - 1 + 1
    //     }));
    // });

    // function deletChat(e) {
    //     console.log(e)
    // }

    return(
        chatList
    );
};