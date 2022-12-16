import "./Register.css"

const Register = () => {
    return ( 
        <form className="register-form">
            <div className='input'>
            <label>Username</label>
            <input placeholder='Please enter a Username' type={"text"}></input>
            </div>
            <div className='input'>
            <label>Password</label>
            <input placeholder='Please enter a Password' type={"text"}></input>
            </div>
            <button className='btn' type='submit'>Submit</button>
        </form>
     );
}
 
export default Register;