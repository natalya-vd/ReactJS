import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { createProfileAction } from '../../store/profile/actions';

import { Header } from '../../components/Header';
import Container from '@material-ui/core/Container';

export function Profile() {
    const checked = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const setChecked = useCallback(() => {
        dispatch(createProfileAction)
    }, [dispatch])

    return(
        <Container maxWidth="lg">
            <Header/>
            <h1>
                Профиль
            </h1>
            <input 
                type="checkbox"
                checked={ checked }
                onChange={ setChecked }
            />
        </Container>
    );
};