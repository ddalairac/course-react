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
import { startLoadingNotesMW } from '../actions/notes';
import { loadingFinishAction, loadingStartAction } from '../actions/ui';

export const AppRouter = () => {
    const dispatch = useDispatch()

    const auth = useSelector(store => store.auth)
    const [isLogged, setIsLogged] = useState(false)
    
    const { loading } = useSelector(store => store.ui)
    // const [isLoading, setIsLoading] = useState(false)
    // useEffect(() => {
    //     console.log("loading",loading)
    //     setIsLoading(loading)
    // }, [loading])

    useEffect(() => {
        dispatch(loadingStartAction())
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const { uid, displayName } = user
                if (uid && displayName) {
                    dispatch(loginAction(uid, displayName))
                    dispatch(startLoadingNotesMW(uid))
                }
            }
            dispatch(loadingFinishAction())
        })
    }, [dispatch, setIsLogged])

    useEffect(() => {
        setIsLogged(!!(auth && auth.uid && auth.fullname))
    }, [auth])

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
