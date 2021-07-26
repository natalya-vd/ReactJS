import { useState, useEffect } from 'react';
import { InputMessage } from './components/InputMessage';
import { MessageList } from './components/MessageList';
import { ChatList } from './components/ChatList';
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
import './scss/app.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const userName1 = 'Наташа';
const userName2 = 'Ксюша'; //робот
const textUser = 'Привет. Как дела?';

function App() {
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  /**
   * Следит за messageList, если добавляется сообщение, то отвечает на него
   */
  useEffect(() => {
    if(messageList.length !== 0 && messageList[messageList.length - 1].author === userName1) {
      const time = Math.round(Math.random() * 2000);

      setTimeout(() => {
        makeMessage(userName2, user2, textUser);
      }, time);
    }
  }, [messageList])

  /**
   * Обновляет список сообщений и очищает форму ввода сообщений
   */
  const updateMessageList = () => {
    makeMessage(userName1, user1, value);
    setValue('');
  }

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
  function makeMessage(user, userPhoto, userText) {
    setMessageList(
      messageList.concat({
        author: user,
        photo: userPhoto,
        text: userText
      })
    );
  }

  return (
    <Container maxWidth="lg" >
      <Grid container className="app">
        <Grid item xs={3}>
          <ChatList />
        </Grid>
        <Grid item xs={9} container direction="column" justifyContent="flex-end">
          <MessageList list={messageList}/>
          <div className="app__form-wrapper">
            <InputMessage value={value} updateMessageList={updateMessageList} handleChange={handleChange}/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
