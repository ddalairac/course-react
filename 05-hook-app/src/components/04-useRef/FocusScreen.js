import React, { useRef } from 'react'
import '../styles.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log("useRef", inputRef)

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input ref={inputRef} className="form-control" />

            <button className="btn btn-primary" onClick={handleClick}>focus</button>
        </>
    )
}
