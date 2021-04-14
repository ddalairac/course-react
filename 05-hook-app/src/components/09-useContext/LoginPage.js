import React, { useContext, useEffect } from 'react'
import { UserContext } from './userContext'

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        if (setUser) {
            const loggedUser = {
                id: 1,
                name: "Diego",
                type: 'admin'
            }
            setUser(loggedUser)
        }
    }, [setUser])

    function onLogin() {
        const loggedUser = {
            id: 1,
            name: "Diego",
            type: 'admin'
        }
        setUser(loggedUser)
    }
    function onLogout() {
        const loggedUser = {
            id: null,
            name: "",
            type: ''
        }
        setUser(loggedUser)
    }
    return (
        <>
            <h1>LoginPage </h1>
            <hr />

            <button onClick={onLogin} className="btn btn-danger">Login</button>
            <button onClick={onLogout} className="btn btn-outline-danger">Logout</button>
            <pre>{JSON.stringify(user, null, 3)}</pre>
        </>
    )
}
