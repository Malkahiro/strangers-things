import React, {useState} from 'react'
import {registerUser} from '../../api/api'
import {Link} from 'react-router-dom'
import "./Register.css"
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await registerUser(username, password);
        setUsername('');
        setPassword('');
    }

    return ( <form id='register-form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input required min={5} onChange={(event) => setUsername(event.target.value)} 
        type="text" placeholder='Enter a Username' value={username} name={username} />
        <label>Password</label>
        <input required min={5} onChange={(event) => setPassword(event.target.value)} 
        type="password" placeholder='Enter a Password' value={password} name={password} />
        <button type='submit'>Sign Up</button>
        <Link to={"/login"}>Already have an account? Sign In</Link>

    </form> );
}
 
export default Register;