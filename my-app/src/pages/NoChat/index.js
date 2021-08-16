import { Header } from '../../components/Header';
import { ChatListContainer } from '../../containers/ChatListContainer';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export function NoChat() {
    return (
        <Container maxWidth="lg" >
            <Header/>
            <Grid container className="app">
                <Grid item xs={4}>
                    <ChatListContainer />
                </Grid>
                <Grid item xs={8} container direction="column" justifyContent="flex-end">
                    <p>
                        Чат не найден
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
}