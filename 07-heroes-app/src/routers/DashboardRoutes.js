import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                {/* A <Switch> looks through its children <Route>s and 
                renders the first one that matches the current URL. */}
                <Switch>
                    {/* <Route exact path="/hero" component={HeroScreen} /> */}
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route path="/dc" component={DcScreen} />

                    <Redirect to="/marvel" />
                    {/* <Route path="/" /> */}
                </Switch>
            </div>
        </>
    )
}
