import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { JournalScreen } from '../journal/JournalScreen';

export const PrivateRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container">
                <Switch>
                    <Route exact path="/journal" component={JournalScreen} />
                    <Redirect to="/journal" />
                </Switch>
            </div>
        </>
    )
}
