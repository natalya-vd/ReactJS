import { useCallback } from 'react';
import { useDispatch } from "react-redux";

import { createRemoveChat } from '../../store/chats/actions';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

export const Chat = (props) => {
    const dispatch = useDispatch();

    const deletChat = useCallback((e) => {
        dispatch(createRemoveChat(+e.target.ownerDocument.activeElement.id))
    }, [dispatch])

    return(
        <ListItem>
            <Box mr={3}>
                <Avatar src={props.itemList.photo} alt="user" />
            </Box>
            <Button to={`/chats/${props.itemList.chatId}`} component={ RouterLink }>
                {props.itemList.author}
            </Button>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={deletChat}
                id={props.itemList.chatId}
                disableElevation
            >
                X
            </Button>
        </ListItem>
    )
}