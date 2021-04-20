import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const AuthRouter = ({ isAutenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            (!isAutenticated)
                ? <Component {...props} />
                : <Redirect to="/" />
        )} />
    )
}

AuthRouter.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}