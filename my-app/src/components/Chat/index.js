import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

export const Chat = (props) => {
    return(
        <ListItem>
            <Box mr={3}>
                <Avatar src={props.itemList.photo} alt="user" />
            </Box>
            <Button to={`/chats/${props.itemList.id}`} component={ RouterLink }>
                {props.itemList.author}
            </Button>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={props.deletChat}
                id={props.itemList.id}
                disableElevation
            >
                X
            </Button>
        </ListItem>
    )
}