import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return ( <div className='nav-bar'>
        <div className='link'><Link to={'/login'}>Login</Link></div>
        <div className='link'><Link to={'/posts'}>Posts</Link></div>
        <div className='link'><Link to={'/register'}>Register</Link></div>
        </div> );
}
 
export default Navbar;