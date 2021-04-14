import React from 'react'
import {
    // Link,
    NavLink
} from "react-router-dom";
export const Navbar = () => {
    return (
        <>
            <nav className="nav">
                {/* <Link className="nav-link" to="./">Home</Link>
                <Link className="nav-link" to="./login">Login</Link>
                <Link className="nav-link" to="./about">About</Link> */}

                <NavLink exact activeClassName="active" className="nav-link" to="./">Home</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="./login">Login</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="./about">About</NavLink>
            </nav>
            <hr />
        </>
    )
}
