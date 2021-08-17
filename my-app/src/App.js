import { ChatListContainer } from './containers/ChatListContainer';
import { Header } from './components/Header';
import './App.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { initPostsTracking } from './store/messages';
import { useEffect } from 'react';
import { initChatsTracking } from './store/chats/actions';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(initPostsTracking())

    dispatch(initChatsTracking())
  }, [])

  return (
    <Container maxWidth="lg" >
      <Header/>
      <Grid container className="app">
        <Grid item xs={4}>
        <ChatListContainer />
        </Grid>
        <Grid item xs={8} container direction="column" justifyContent="flex-end">
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
