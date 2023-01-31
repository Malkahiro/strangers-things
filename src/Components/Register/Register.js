import React, {useState} from 'react'
import {registerUser} from '../../api/api'
import "./Register.css"
const Register = ({handleAuth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const response = await registerUser(username, password);
        const token = response.data.token;
        handleAuth(token);
        setUsername('');
        setPassword('');
    }

    return ( <form id='register-form' onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input required min={5} onChange={(event) => setUsername(event.target.value)} 
        type="text" placeholder='Enter a Username' value={username} name={username} />
        <label htmlFor="">Password</label>
        <input required min={5} onChange={(event) => setPassword(event.target.value)} 
        type="password" placeholder='Enter a Password' value={password} name={password} />
        <button type='submit'>Submit</button>
    </form> );
}
 
export default Register;