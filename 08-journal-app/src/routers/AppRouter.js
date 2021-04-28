import React from 'react'
// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, /* Link */ } from "react-router-dom";
import { Prealoader } from '../components/iu/Prealoader';
import { AuthRouter } from './AuthRouter';
import { AuthRoutes } from './AuthRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    const { auth, ui } = useSelector(state => state)
    const { loading } = ui
    // const [logged, setLogged] = useState(false)
    console.log("ui",ui)
    // useEffect(() => {
    //     setLogged(!!(auth && auth.uid && auth.fullname))
    // }, [auth])

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
