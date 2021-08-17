import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { useState, useEffect } from 'react';
import firebase from "firebase";

import App from '../../App';
import { Home } from '../../pages/Home';
import { ChatsContainer } from '../../containers/ChatsContainer';
import { ProfileContainer } from '../../containers/ProfileContainer';
import { NoChat } from '../../pages/NoChat';
import { Comments } from '../../pages/Comments';
import { Login } from '../../pages/Login';
import { SignUp } from '../../pages/SignUp';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';

export function Routes() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setAuth(true);
        } else {
            setAuth(false);
        }
        })
    }, []);

    return(
        <Router>
            <Switch>
                <PublicRoute authenticated={auth} exact path="/">
                    <Home />
                </PublicRoute>

                <PublicRoute authenticated={auth} exact path="/login">
                    <Login />
                </PublicRoute>

                <PublicRoute authenticated={auth} exact path="/signup">
                    <SignUp />
                </PublicRoute>
                    
                <PrivateRoute authenticated={auth} exact path="/chats">
                    <App />
                </PrivateRoute>

                <PrivateRoute 
                authenticated={auth}
                path="/chats/:chatId"
                component={ ChatsContainer }
                />

                <PrivateRoute authenticated={auth} path="/profile">
                    <ProfileContainer />
                </PrivateRoute>

                <PrivateRoute authenticated={auth} path="/nochat">
                    <NoChat />
                </PrivateRoute>

                <PublicRoute authenticated={auth} path="/comments">
                    <Comments />
                </PublicRoute>

                <PublicRoute authenticated={auth}>
                    <p>
                        Страница не найдена
                    </p>
                </PublicRoute>
            </Switch>
        </Router>   
    )
}