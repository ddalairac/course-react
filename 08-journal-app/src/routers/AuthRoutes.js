import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRoutes = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                {/* <Navbar /> */}
                    <Switch>
                        <Route path="/auth/register" component={RegisterScreen} />
                        <Route path="/auth/login" component={LoginScreen} />
                        <Redirect to="/auth/login" />
                    </Switch>
            </div>
        </div>
    )
}