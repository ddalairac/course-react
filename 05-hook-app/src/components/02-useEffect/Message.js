import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        console.log("componente montado: add Listener")
        const mousemoveHandler = (e) => {
            console.log("addEventListener")
        }
        window.addEventListener('mousemove', mousemoveHandler)
        return () => {
            console.log("componente DESmontado: clean Listener")
            window.removeEventListener('mousemove', mousemoveHandler)
            // cleanup
        }
    }, [])
    return (
        <>
            <h1>bla</h1>
        </>
    )
}
