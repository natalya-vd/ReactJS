import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

export function Header() {
    return (
        <List>
            <Grid container>
                <Grid item>
                    <ListItem>
                        <Link to="/">
                            Домой
                        </Link>
                    </ListItem>
                </Grid>
                <Grid item>
                    <ListItem>
                        <Link to="/profile">
                            Профиль
                        </Link>
                    </ListItem>
                </Grid>
                <Grid item>
                    <ListItem>
                        <Link to="/chats">
                            Список чатов
                        </Link>
                    </ListItem>
                </Grid>
            </Grid>
        </List>
    );
};