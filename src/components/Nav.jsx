import React from 'react'
import "./Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <span className="orange">flexBox</span>
                </div>
                <div className="navlinks">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Service</a>
                    <a href="/">Help</a>
                </div>
                <div className="btn">
                    <button>Login</button>
                </div>
                <IconButton><MenuIcon className="burger"/></IconButton>
            </div>
        </>
    )
}

export default Nav