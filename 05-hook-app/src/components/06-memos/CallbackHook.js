import React, { useCallback, useState } from 'react'
import '../styles.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)
    // const increment = () => {
    //     setcounter(counter + 1)
    // }
    const increment = useCallback(
        () => {
            setcounter((c) => c + 1)
        },
        [setcounter],
    )
    return (
        <>
            <h1>CallbackHook</h1>
            <hr />
            <p>counter: {counter} </p>
            <ShowIncrement increment={increment} />
        </>
    )
}
