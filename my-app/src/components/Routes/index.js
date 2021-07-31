import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from '../../App';
import { Home } from '../../pages/Home';
import { Chats } from '../../pages/Chats';
import { Profile } from '../../pages/Profile';
import { NoChat } from '../../pages/NoChat';

export function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                {/* <Route 
                exact 
                path="/chats" 
                component={App}
                /> */}
                    
                <Route exact path="/chats">
                    <App />
                </Route>

                <Route 
                path="/chats/:chatId"
                component={Chats}
                />

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/nochat">
                    <NoChat />
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