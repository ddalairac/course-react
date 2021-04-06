import React, { useEffect } from 'react'
import './effects.css';
import { useForm } from './useForm';

export const FormWithCustomHook = () => {

    const initialFormState = {
        name: '',
        password: '',
        email: '',
    }
    const [formState, handleInputChange] = useForm(initialFormState)

    const { name, password, email } = formState


    useEffect((() => {
        // console.log("siempre que cambia formState")
    }), [formState])
    useEffect((() => {
        // console.log("siempre que cambia name")
    }), [name])
    useEffect((() => {
        // console.log("siempre que cambia password")
    }), [password])
    useEffect((() => {
        // console.log("siempre que cambia email")
    }), [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Tu clave"
                        value={password}
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
                <button className="btn btn-primary" type="submit">Aceptar</button>
            </form>
        </>
    )
}
