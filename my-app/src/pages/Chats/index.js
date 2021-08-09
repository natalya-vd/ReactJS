import { useState, useEffect, useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getMessageListSelector } from '../../store/messages/selectors';
import { createAddMessage } from '../../store/messages/actions';

import { InputMessage } from '../../components/InputMessage';
import { MessageList } from '../../components/MessageList';
import { ChatList } from '../../components/ChatList';
import { Header } from '../../components/Header';
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
import '../../App.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import faker from 'faker';

const userName1 = 'Наташа';
const userName2 = 'Ксюша'; //робот
const textUser = `${faker.lorem.paragraph()}`;

export function Chats() {
  const { chatId } = useParams();

  const [value, setValue] = useState('');

  const messageListInitial = useSelector(getMessageListSelector);
  // console.log(messageListInitial)

  // console.log(messageListInitial[1][0]) //1 - chatId, 0-элемент
  //Получаю сообщение из инпута и через диспатч записываю в стор

  // const [messageList, setMessageList] = useState(getInitialMessage(messageListInitial, chatId));

  // useEffect(() => {
  //   setMessageList(getInitialMessage(messageListInitial, chatId))
  // }, [chatId]);

  
  
  const dispatch = useDispatch();
//value  в action уходит пустой, проверь
  const addMessage = useCallback(() => {
      dispatch(createAddMessage(chatId, { text: value, author: userName1}));
      setValue('');      
  }, [messageListInitial, value, dispatch]);

  /**
   * Следит за messageList, если добавляется сообщение, то отвечает на него
   */
  useEffect(() => {
    if(messageListInitial[chatId].length !== 0 && messageListInitial[chatId][messageListInitial[chatId].length - 1].author === userName1) {
      console.log('В ифе')
      const time = Math.round(Math.random() * 2000);

      setTimeout(() => {
        console.log('В сеттаймауте')
        dispatch(createAddMessage(chatId, { text: textUser, author: userName2}));
      }, time);
    }
  });

  if(!serchChat(messageListInitial, chatId)) {
    return <Redirect to="/nochat" />;
  };

  function serchChat(listChats, chatId) {
    let message = false;
    for(let chat in listChats) {
      if(+chat === +chatId) {
        message = true;
      }
    };
    return message;
  };

  /**
   * Обновляет список сообщений и очищает форму ввода сообщений
   */
  // const updateMessageList = () => {
  //   makeMessage(userName1, user1, value);
  //   setValue('');
  // }

  /**
   * Забирает данные из формы ввода сообщения и записывает в стейт value
   * @param {*} event 
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  /**
   * Добавляет сообщение от пользователя в стейт messageList
   * @param {string} user Имя пользователя
   * @param {string} userPhoto Ссылка на фото пользователя
   * @param {string} userText Текст пользователя
   */
  // function makeMessage(user, userPhoto, userText) {
  //   setMessageList(
  //     messageList.concat({
  //       author: user,
  //       photo: userPhoto,
  //       text: userText
  //     })
  //   );
  // }

  return (
    <Container maxWidth="lg" >
      <Header/>
      <Grid container className="app">
        <Grid item xs={4}>
          <ChatList />
        </Grid>
        <Grid item xs={8} container direction="column" justifyContent="flex-end">
          {/* <MessageList list={messageList} chatId={chatId}/> */}
          <MessageList chatId={chatId}/>
          <div className="app__form-wrapper">
            <InputMessage value={value} addMessage={addMessage} handleChange={handleChange}/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
