import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const Chat = (props) => {
    return(
        
            <ListItem>
                <Box mr={5}>
                    <Avatar src={props.itemList.photo} alt="user" />
                </Box>
            <Button href="#">
                {props.itemList.author}
            </Button>
        </ListItem>
        
    )
}