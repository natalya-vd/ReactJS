import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export function Home() {
    return (
        <Container maxWidth="lg">
            <div>
                <Header/>
            </div>
            <Grid container>
                <Grid item xs={6}>
                    <Link to="/login">
                        Войти
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/signup">
                        Регистрация
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};