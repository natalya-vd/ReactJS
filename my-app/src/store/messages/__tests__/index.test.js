import { createAddMessage } from "../actions";
import { messagesReducer, initialState } from "../reducer"


describe('messagesReducer', () => {
    it('вызов редьюсера без экшена вернет initialState', () => {
        const result  = messagesReducer();

        expect(result).toEqual(initialState);
    })

    it('сообщение добавляется в конец списка', () => {
        const chatId = Array.from({
            length: 5,
            }).map((_, index) => index + 1)

        const messageResult = {
            '1': [{text: 'Привет-привет', author: 'Тест Имя'}],
            '2': [{text: 'Привет-привет', author: 'Тест Имя'}],
            '3': [{text: 'Привет-привет', author: 'Тест Имя'}],
            '4': [{text: 'Привет-привет', author: 'Тест Имя'}],
            '5': [{text: 'Привет-привет', author: 'Тест Имя'}],
        }
        

        const result = null;
        chatId.forEach((item) => {
            result = messagesReducer(undefined, createAddMessage(`"${item}"`, {text: 'Привет-привет', author: 'Тест Имя'}))
        })
        // const result = messagesReducer(undefined, createAddMessage(1, {text: 'Привет-привет', author: 'Тест Имя'}));
    
        expect(result).toEqual({
            messagesList: messageResult
        })
    })
})