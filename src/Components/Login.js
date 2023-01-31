import React, { useState } from 'react'
import { loginUser } from '../api/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) =>{
        event.preventDefault();
        const response = await loginUser(username, password);
        console.log(response);
        const token = response.data.token;
        console.log(token);
        setUsername('');
        setPassword('');
    }
    return ( <form onSubmit={handleLogin}>
        <label htmlFor="">Username</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}
         placeholder='Enter your username' />
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
         placeholder='Enter your password' />
        <button type='submit'>Login</button>
    </form> );
}
 
export default Login;