// https://reactrouter.com/web/guides/quick-start

import React from 'react'
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen'

export const AppRouter = () => {
    return (
        <Router>
            <>
            {/* <MarvelScreen/> */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRoutes} />
                </Switch>
            </>
        </Router>
    )
}
