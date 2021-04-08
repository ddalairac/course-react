
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../styles.css';
import './layout.css';

export const LayoutEffectComp = () => {

    const { counter, increment } = useCounter(1)
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { data } = state
    const { quote } = !!data && data[0]

    const [elementSize, setElementSize] = useState()
    const ptagRef = useRef()
    useLayoutEffect(() => {
        console.log(ptagRef.current.getBoundingClientRect());
        setElementSize(ptagRef.current.getBoundingClientRect())
    }, [quote])


    return (
        <>
            <h1>LayoutEffect</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment()}>Siguiente</button>
            <blockquote className="blockquote text-right">
                <p ref={ptagRef} className="mb-o">{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(elementSize, null,3)}
            </pre>

        </>
    )
}
