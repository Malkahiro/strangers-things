import React, {useState} from 'react'
import {registerUser} from '../api/api'
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        registerUser(username, password);
        setUsername('');
        setPassword('');
    }

    return ( <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input onChange={(event) => setUsername(event.target.value)} 
        type="text" placeholder='Enter a Username' value={username} name={username} />
        <label htmlFor="">Password</label>
        <input onChange={(event) => setPassword(event.target.value)} 
        type="password" placeholder='Enter a Password' value={password} name={password} />
        <button type='submit'>Submit</button>
    </form> );
}
 
export default Register;