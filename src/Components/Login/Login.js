import React, { useState } from 'react'
import { loginUser } from '../../api/api';
import {Link} from 'react-router-dom'
import './Login.css'

const Login = ({handleAuth, setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) =>{
        event.preventDefault();
        const response = await loginUser(username, password)
        .then(result => handleAuth(result.data.token))
        console.log(response);
        setIsLoggedIn(true);
        setUsername('');
        setPassword('');
    }
    return ( <form id='login-form' onSubmit={handleLogin}>
        <label>Username</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}
         placeholder='Enter your username' />
        <label>Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
         placeholder='Enter your password' />
        <button type='submit'>Login</button>
        <Link to={"/register"}>Don't have an account? Sign Up</Link>
    </form> );
}
 
export default Login;