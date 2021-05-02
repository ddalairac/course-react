import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

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
import { errorHandler } from '../helpers/errorHandler';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        dispatch(loadingStartAction())
        try {
            firebase.auth().onAuthStateChanged(user => {
                if (user && user.uid && user.displayName) {
                    const { uid, displayName } = user
                    dispatch(loginAction(uid, displayName))
                    dispatch(startLoadingNotesMW(uid))
                    setIsLogged(true)
                } else {
                    setIsLogged(false)
                }
            })
        } catch (error) {
            errorHandler(error, 'onAuthStateChanged')
            setIsLogged(false)
        } finally {
            dispatch(loadingFinishAction())
        }
    }, [dispatch, setIsLogged])


    return (
        <Router>
            <>
                <Prealoader />
                <Switch>
                    <AuthRouter path="/auth" component={AuthRoutes} isAutenticated={isLogged} />
                    <PrivateRouter path="/" component={PrivateRoutes} isAutenticated={isLogged} />
                </Switch>
            </>
        </Router>
    )
}
