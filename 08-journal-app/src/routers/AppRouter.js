import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, /* Link */ } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { AuthRoutes } from './AuthRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    const [logged, setLogged] = useState(false)
    function toggleLogin() {
        setLogged(!logged)
    }
    return (
        <Router>
            <>
                <nav className="main-menu">
                    {/* <Link className="btn btn-primary" to="/auth/login">login</Link>
                    <Link className="btn btn-primary" to="/auth/register">register</Link>
                    <Link className="btn btn-primary" to="/journal">journal</Link> */}
                    <button className="btn btn-primary" onClick={toggleLogin}>logged {JSON.stringify(logged)}</button>
                </nav>
                <Switch>
                    <AuthRouter  path="/auth" component={AuthRoutes} isAutenticated={logged} />
                    <PrivateRouter path="/" component={PrivateRoutes} isAutenticated={logged} />
                </Switch>
            </>
        </Router>
    )
}
