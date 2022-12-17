import { useState } from 'react';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(username, password);
        setUsername('');
        setPassword('');
    }

    const onChange = (event) =>{
        setUsername(event.target.value)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className="login-form">
            <div className='input'>
            <label>Username</label>
            <input onChange={onChange} name='username' value={username} placeholder='Username' type={"text"}></input>
            </div>
            <div className='input'>
            <label>Password</label>
            <input onChange={(event) => setPassword(event.target.value)} name='password' value={password} placeholder='Password' type={"text"}></input>
            </div>
            <button className='btn' type='submit'>Submit</button>
        </form>
     );
}
 
export default Login;