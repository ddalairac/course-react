import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/private/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/" component={LoginScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/calendar" component={CalendarScreen} />
                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
