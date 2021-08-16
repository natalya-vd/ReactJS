import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from '../../App';
import { Home } from '../../pages/Home';
import { ChatsContainer } from '../../containers/ChatsContainer';
import { ProfileContainer } from '../../containers/ProfileContainer';
import { NoChat } from '../../pages/NoChat';
import { Comments } from '../../pages/Comments';

export function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                    
                <Route exact path="/chats">
                    <App />
                </Route>

                <Route 
                path="/chats/:chatId"
                component={ ChatsContainer }
                />

                <Route path="/profile">
                    <ProfileContainer />
                </Route>

                <Route path="/nochat">
                    <NoChat />
                </Route>

                <Route path="/comments">
                    <Comments />
                </Route>

                <Route>
                    <p>
                        Страница не найдена
                    </p>
                </Route>
            </Switch>
        </Router>   
    )
}