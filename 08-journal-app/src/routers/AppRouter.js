import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
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
                {/* <ul>
                    <li><Link to="/auth/login">login</Link></li>
                    <li><Link to="/auth/register">register</Link></li>
                    <li><Link to="/journal">journal</Link></li>
                    <li><button className="btn btn-outline-primary" onClick={toggleLogin}>logged {JSON.stringify(logged)}</button></li>
                </ul> */}
                <Switch>
                    <AuthRouter  path="/auth" component={AuthRoutes} isAutenticated={logged} />
                    <PrivateRouter path="/" component={PrivateRoutes} isAutenticated={logged} />
                </Switch>
            </>
        </Router>
    )
}
