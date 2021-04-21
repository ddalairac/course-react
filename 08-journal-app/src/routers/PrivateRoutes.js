import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { JournalScreen } from '../components/private/journal/JournalScreen';

export const PrivateRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/journal" component={JournalScreen} />
                    <Redirect to="/journal" />
                </Switch>
        </>
    )
}
