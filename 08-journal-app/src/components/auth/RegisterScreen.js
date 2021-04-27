import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeErrorAction, setErrorAction } from '../../actions/ui';


export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui)

    const [formState, handleInputChange] = useForm({
        fullname: '',
        email: '',
        password: '',
        password2: '',
    });
    const { fullname, email, password, password2 } = formState;

    function isFormValid() {

        if (fullname.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || password2.trim().length === 0) {
            dispatch(setErrorAction("Todos los campos son obligatorios"))
            return false
        }
        if (!validator.isEmail(email)) {
            dispatch(setErrorAction("Email invalido"))
            return false
        }
        if (password.length < 6 || password.length > 20) {
            dispatch(setErrorAction("La constraseña debe tener entre 6 y 20 caracteres"))
            return false
        }
        if (password !== password2) {
            dispatch(setErrorAction("La constraseña y la confirmacion deben ser iguales"))
            return false
        }
        dispatch(removeErrorAction())
        return true
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (isFormValid()) {
            console.log("submit", formState)
            // dispatch(fullname,password)
        }
    }
    return (
        <>
            <h1 className="auth__title mb-5">Register Screen</h1>
            <form onSubmit={handleSubmit}>
                {msjError && <div className="auth__alert-error">{msjError}</div>}
                <input className="auth_input" type="text" placeholder="Nombre completo" name="fullname" autoComplete="off" value={fullname} onChange={handleInputChange} />
                <input className="auth_input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth_input" type="password" placeholder="Password" name="password" autoComplete="off" value={password} onChange={handleInputChange} />
                <input className="auth_input" type="password" placeholder="Confirmar password " name="password2" autoComplete="off" value={password2} onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block mb-5" disabled={false}>Registrarse</button>

                <Link to="/auth/login" className="link ">Ya esta registrado?</Link>
            </form>
        </>
    )
}
