import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { createProfileAction } from '../../store/profile/actions';
import { getProfileSelector } from '../../store/profile/selectors';
import { Profile } from '../../pages/Profile';

export function ProfileContainer() {
    const {checked} = useSelector(getProfileSelector);
    const dispatch = useDispatch();

    const setChecked = useCallback(() => {
        dispatch(createProfileAction)
    }, [dispatch]);

    return (
        <Profile 
        checked={ checked }
        setChecked={ setChecked }
        />
    )
}