import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const UseRefExample = () => {
    const [show, setshow] = useState(false)
    return (
        <>
            <h1>UseRefExample</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>{
                setshow(!show)
            }}>show/hide</button>
            <br/>
            {show && <MultipleCustomHooks/>}
        </>
    )
}
