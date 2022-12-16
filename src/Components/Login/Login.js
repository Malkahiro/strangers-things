import './Login.css'

const Login = () => {
    return ( 
        <form className="login-form">
            <div className='input'>
            <label>Username</label>
            <input placeholder='Username' type={"text"}></input>
            </div>
            <div className='input'>
            <label>Password</label>
            <input placeholder='Password' type={"text"}></input>
            </div>
            <button className='btn' type='submit'>Submit</button>
        </form>
     );
}
 
export default Login;