import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../styles.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(500)
    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones)=>{
        for (let index = 0; index < iteraciones; index++) {
            console.log("iterando"+iteraciones);
        }
        return `${iteraciones} iteraciones realizadas.`;
    }

    const memoProcesopesado = useMemo(()=>procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <hr />
            <p>counter: <small> value={counter} </small></p>
            <p>showHide: {JSON.stringify(show)} </p>
            {/* <p>procesoPesado: {procesoPesado(counter)} </p> */}
            <p>procesoPesado: {memoProcesopesado} </p>

            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide </button>

        </>
    )
}
