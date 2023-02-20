import React from 'react';
import {Link} from "react-router-dom"
import Searchbar from '../SearchBar/Searchbar';
import './Navbar.css'
const Navbar = ({posts, setSearchResults}) => {
    return ( <div id='navbar'>
        <h1 id='header'>Stranger's Things</h1>
        <Searchbar posts={posts} setSearchResults={setSearchResults} />
        <div id='links'>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/add"}>Create Post</Link>
        </div>
    </div> );
}
 
export default Navbar;