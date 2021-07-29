import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from '../../App';
import { Home } from '../../pages/Home';
import { Chats } from '../../pages/Chats';
import { Profile } from '../../pages/Profile';

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
                
                {/* <Route path="/chats/:chatId">
                    <Chats />
                </Route> */}

                <Route 
                path="/chats/:chatId"
                component={Chats}
                />
                    

                <Route path="/profile">
                    <Profile />
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