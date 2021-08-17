import { InputMessage } from '../../components/InputMessage';
import { MessageListContainer } from '../../containers/MessageListContainer';
import { ChatListContainer } from '../../containers/ChatListContainer'
import { Header } from '../../components/Header';
import '../../App.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export function Chats(props) {
  return (
    <Container maxWidth="lg" >
      <Header/>
      <Grid container className="app">
        <Grid item xs={4}>
          <ChatListContainer chatId = { props.chatId } />
        </Grid>
        <Grid item xs={8} container direction="column" justifyContent="flex-end">
          <MessageListContainer chatId={props.chatId}/>
          <div className="app__form-wrapper">
            <InputMessage value={props.value} addMessage={props.addMessage} handleChange={props.handleChange}/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
