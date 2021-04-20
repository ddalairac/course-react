import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container">   
                <Switch>   
                    <Route path="/auth/register" component={RegisterScreen} />
                    <Route path="/auth/login" component={LoginScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </>
    )
}
