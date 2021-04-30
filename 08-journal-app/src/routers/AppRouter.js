import React, { useEffect, useState } from 'react'
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
import { startLoadingNotesMW } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const { auth, ui } = store
    const { loading } = ui

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        dispatch(loadingStartAction())
        firebase.auth().onAuthStateChanged(async user => {
            const {uid, displayName} = user
            dispatch(loadingFinishAction())
            if (uid && displayName) {
                dispatch(loginAction(user.uid, user.displayName))
                dispatch(startLoadingNotesMW(uid))
            }
        })
    }, [dispatch])

    useEffect(() => {
        setIsLogged(!!(auth && auth.uid && auth.fullname))
    }, [auth])

    // useEffect(() => {
    //     console.log("Store\n----------------------\n", store)
    // }, [store])

    return (
        <Router>
            <>
                {loading && <Prealoader />}
                <Switch>
                    <AuthRouter path="/auth" component={AuthRoutes} isAutenticated={isLogged} />
                    <PrivateRouter path="/" component={PrivateRoutes} isAutenticated={isLogged} />
                </Switch>
            </>
        </Router>
    )
}
