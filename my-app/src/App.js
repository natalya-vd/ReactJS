import './scss/App.scss';
import {Message} from './components/Message';

const userName = 'Ксюша';
const textUser = 'Привет. Как дела?';

function App() {
  return (
    <div className="app container">
      <div className="app__item">
        <img className="app__user-img" src="../img/user-1.jpg" alt="user1" width="50" height="50"/>
        <div>
          <p className="app__user-text">
            {userName}
          </p>
          <Message text={textUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
