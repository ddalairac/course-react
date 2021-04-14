import React, { useContext } from 'react'
import { UserContext } from './userContext'

export const HomePage = () => {
    const userContext = useContext(UserContext)
    console.log("HomePage userContext: ",userContext)
    return (
        <>
        <h1>HomePage </h1>
        <hr />
            
        </>
    )
}
