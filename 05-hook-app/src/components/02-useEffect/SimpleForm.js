import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const initialFormState = {
        name: '',
        lastname: '',
        email: '',
    }
    const [formState, setformState] = useState(initialFormState)

    const { name, lastname, email } = formState

    useEffect((() => {
        // console.log("unica vez")
    }),[])
    useEffect((() => {
        // console.log("siempre")
    }))
    useEffect((() => {
        // console.log("siempre que cambia formState")
    }), [formState])
    useEffect((() => {
        // console.log("siempre que cambia name")
    }), [name])
    useEffect((() => {
        // console.log("siempre que cambia lastname")
    }), [lastname])
    useEffect((() => {
        // console.log("siempre que cambia email")
    }), [email])

    const handleInputChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        let { target } = e
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Tu apellido"
                    value={lastname}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message/> }
        </>
    )
}
