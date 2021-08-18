import React from 'react'

import {render, fireEvent} from '@testing-library/react'
import { ChatList, ChatListTestIds } from '../../components/ChatList'

describe('ChatListContainer', () => {
    it.todo('Получение данных из стора')

    it('Вызов метода addChat по клику на кнопку', () => {
        const addChat = jest.fn();
        
        const component = render(<ChatList addChat={ addChat } />)

        fireEvent.click(component.getByTestId(ChatListTestIds.click))

        expect(addChat).toBeCalled()
    })

    it.todo('Отправка данных в БД')

    it.todo('Обработка ошибки')

})