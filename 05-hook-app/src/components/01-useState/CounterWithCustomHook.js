import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(10)

    return (
        <>
            <h1>Counter with hook {state}</h1>
            <button className="btn btn-primary" onClick={()=>increment(2)}>+2</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={()=>decrement(2)}>-2</button>

        </>
    )
}
