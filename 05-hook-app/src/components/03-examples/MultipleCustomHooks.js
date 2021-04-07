import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './example.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // console.log(state)
    const { data, loading, error } = state
    const { author, quote } = !!data && data[0]
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            { loading ? (


                <div className="alert alert-info text-center">
                    Loading...
                </div>


            ) : (


                <blockquote className="blockquote text-right">
                    <p className="mb-o">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>


            )}
            {error && <p>error: {error}</p> }
            <button className="btn btn-primary" onClick={()=>increment()}>Siguiente</button>
        </>
    )
}
