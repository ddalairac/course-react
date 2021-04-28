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
import { loadingFinishAction, loadingStartAction } from '../actions/ui';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const { auth, ui } = store
    const { loading } = ui

    useEffect(() => {
        dispatch(loadingStartAction())
        firebase.auth().onAuthStateChanged(user => {
            // console.log("onAuthStateChanged user", user)
            dispatch(loadingFinishAction())
            if (user && user.uid && user.displayName) {
                dispatch(loginAction(user.uid, user.displayName))
            }
        })
    }, [dispatch])

    // useEffect(() => {
    //     console.log("Store\n----------------------\n", store)
    // }, [store])

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
