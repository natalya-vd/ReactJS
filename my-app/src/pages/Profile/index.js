import { Header } from '../../components/Header';
import Container from '@material-ui/core/Container';

export function Profile(props) {
    return(
        <Container maxWidth="lg">
            <Header/>
            <h1>
                Профиль
            </h1>
            <input 
                type="checkbox"
                checked={ props.checked }
                onChange={ props.setChecked }
            />
        </Container>
    );
};