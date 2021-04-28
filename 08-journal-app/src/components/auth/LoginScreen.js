import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLoginMW, startLoginMW } from '../../actions/auth';
import { useForm } from "../../hooks/useForm";


export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui)

    const [formState, handleInputChange] = useForm({
        email: '',
        password: '',
    });
    const { email, password } = formState;

    function handleGoogleLogin() {
        dispatch(startGoogleLoginMW());
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit", formState)
        dispatch(startLoginMW(email, password))
    }
    return (
        <>
            <h1 className="auth__title mb-5">Login</h1>
            <form onSubmit={handleSubmit}>
                {msjError && <div className="auth__alert-error">{msjError}</div>}
                <input className="auth_input" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                <input className="auth_input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block" disabled={false}>Login</button>
                <hr />
                <div className="auth__social-network">
                    <p>Login con red social</p>
                    <div className="google-btn" onClick={handleGoogleLogin}               >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">No estas registrado?</Link>
            </form>
        </>
    )
}
