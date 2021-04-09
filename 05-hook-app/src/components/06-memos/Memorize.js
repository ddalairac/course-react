import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../styles.css';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(0)
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Memorize</h1>
            <hr />
            <p>counter: <Small value={counter} /></p>
            <p>showHide: {JSON.stringify(show)} </p>

            <button className="btn btn-primary" onClick={() => increment()}>Aceptar</button>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide </button>

        </>
    )
}
