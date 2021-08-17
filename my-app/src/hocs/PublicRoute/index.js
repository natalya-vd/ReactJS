import { Route, Redirect } from "react-router-dom";

export function PublicRoute({ authenticated, ...rest }) {
    return !authenticated ? <Route {...rest} /> : <Redirect to="/chats" />;
}
