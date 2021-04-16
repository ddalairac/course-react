import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    const [{ userName, password }, handleInputChange] = useForm({
        userName: '',
        password: ''
    })

    function handleLogin(e) {
        e.preventDefault()
     
        
        if (userName && userName.trim().length > 0 && password && password.trim().length > 0) {
            let newUser = {
                name: userName,
                // password: password,
                // logged: true
            }
            let action = {
                payload: newUser,
                type: types.login,
            }

            dispatch(action)   
            // console.log("history", history)
            // history.push("/") // agrega una ruta al historial de navegacion
            history.replace("/") // reemplaza en el navegador la ruta actual por la que se le pasa.
        } else {
            console.log("user o password esta vacio")
        }

    }
    return (
        <div className="login">
            <div className="card" >
                <div className="card-body">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input className="form-control"
                                autoComplete="off"
                                type="text"
                                name="userName"
                                placeholder="Usuario"
                                onChange={handleInputChange}
                                value={userName}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                autoComplete="off"
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                                value={password}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
