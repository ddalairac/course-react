import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from "react-router-dom";
import { Error404Page } from './404Page';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (
        <Router>
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={Error404Page} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </>
        </Router>
    )
}
