import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return ( <div id='navbar'>
        <h1 id='header'>Stranger's Things</h1>
        <div id='links'>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/"}>Home</Link>
        </div>
    </div> );
}
 
export default Navbar;