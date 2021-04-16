// https://reactrouter.com/web/guides/quick-start

import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <>
            {/* <MarvelScreen/> */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <PrivateRoute path="/" component={DashboardRoutes} isAutenticated={user.logged}/>
                </Switch>
            </>
        </Router>
    )
}
