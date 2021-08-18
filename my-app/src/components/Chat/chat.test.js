import React from 'react'

import {render} from '@testing-library/react'

import { Chat } from "./";
import faker from 'faker';

describe('Chat', () => {
    it('Рендер компонента Chat', () => {
        const chats = [{chatId: 1456, author: faker.name.firstName(), photo: faker.image.avatar()}];        

        const component = render(
            <Chat 
            itemList = {chats}
            />
        );
        expect(component).toMatchSnapshot();
    
    })
})