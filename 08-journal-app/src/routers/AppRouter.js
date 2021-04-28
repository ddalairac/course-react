import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { firebase } from '../firebase/firebase-config';
import { Prealoader } from '../components/iu/Prealoader';
import { AuthRouter } from './AuthRouter';
import { AuthRoutes } from './AuthRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { loginAction } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { auth, ui } = state
    const { loading } = ui

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log("onAuthStateChanged user", user)
            if (user && user.uid && user.displayName) {
                dispatch(loginAction(user.uid, user.displayName))
            }
        })
    }, [dispatch])

    useEffect(() => {
        console.log("----state", state)
    }, [state])

    return (
        <Router>
            <>
                {loading && <Prealoader />}
                <Switch>
                    <AuthRouter path="/auth" component={AuthRoutes} isAutenticated={!!(auth && auth.uid && auth.fullname)} />
                    <PrivateRouter path="/" component={PrivateRoutes} isAutenticated={!!(auth && auth.uid && auth.fullname)} />
                </Switch>
            </>
        </Router>
    )
}
