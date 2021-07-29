import { Header } from '../../components/Header';
import Container from '@material-ui/core/Container';

export function Profile() {
    return(
        <Container maxWidth="lg">
            <Header/>
            <h1>
                Профиль
            </h1>
        </Container>
    );
};