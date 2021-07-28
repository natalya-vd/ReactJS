import { useState, useEffect } from 'react';
import { Message } from './components/Message';
import { InputMessage } from './components/InputMessage';
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
import './scss/app.scss';

const userName1 = 'Наташа';
const userName2 = 'Ксюша'; //робот
const textUser = 'Привет. Как дела?';

function App() {
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if(messageList.length !== 0 && messageList[messageList.length - 1].author === userName1) {
      const time = Math.round(Math.random() * 2000);

      setTimeout(() => {
        setMessageList(
          messageList.concat({
            author: userName2,
            photo: user2,
            text: textUser
          })
        );
      }, time);
    }
  }, [messageList])

  const updateMessageList = () => {
    setMessageList(
      messageList.concat({
        author: userName1,
        photo: user1,
        text: value
      })
    );
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="app container">
      <ul className="app__list">
        {messageList.map((item)=><Message  message={item}/>)}
      </ul>
      <div className="app__form-wrapper">
        <InputMessage value={value} updateMessageList={updateMessageList} handleChange={handleChange}/>
      </div>
    </div>
  );
};

export default App;
