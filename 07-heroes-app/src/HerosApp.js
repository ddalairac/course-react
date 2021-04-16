import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'
import './styles.css'

export const HerosApp = () => {
    function init() {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }
    const [user, dispatch] = useReducer(authReducer, { logged: false }, init)

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user))
    }, [user])
    return (
        <>
            <AuthContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </AuthContext.Provider>
        </>
    )
}
