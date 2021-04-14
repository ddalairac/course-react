import React, { useState } from 'react'
import '../styles.css';
import { AppRouter } from './AppRouter';
import { UserContext } from './userContext';

export const MainApp = () => {
    const initialState = {
        id: 0,
        name: '',
        type:''
    }
    const [user, setUser] = useState(initialState)

    let someContext = {
        user: user,
        setUser: setUser
    }
    return (
        <UserContext.Provider value={someContext }>
            <p>MainApp </p>
            <hr />
            <AppRouter />
        </UserContext.Provider>
    )
}
