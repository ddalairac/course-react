import React from 'react'

export const LoginScreen = ({history}) => {
    function handleLogin(){
        console.log("history",history)
        // history.push("/") // agrega una ruta al historial de navegacion
        history.replace("/") // reemplaza en el navegador la ruta actual por la que se le pasa.
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary" onClick={handleLogin}>Ingresar</button>
            
        </div>
    )
}
