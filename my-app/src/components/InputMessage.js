import '../scss/input-message.scss';
import { useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const InputMessage = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

    return(
        <form className="input-message" action="#">
            <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Введите сообщение"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                inputRef={inputRef}
                value={props.value} onChange={props.handleChange}
            />
            <Button variant="contained" color="primary" type="submit" onClick={props.updateMessageList}>
                Отправить
            </Button>
        </form>
    )
}