import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className='loginWrapper'>
       <div className='loginContents'>
        <h2 className='loginTitle'>Login</h2>
         <form className='loginForm'>
          <input type="email" placeholder='Enter Email' className='loginInputs'/>
          <input type="password" placeholder='Enter password' className='loginInputs'/>
          <button className='loginSubmit-btn'>Submit</button>
         </form>
         <div className='loginRegisterAnd-password_div'>
          <h4>Register <Link to='/register' className='loginRegister-and_password'>here</Link></h4>
          <h4>Forgot password? <Link to='forgotPassword' className='loginRegister-and_password'>Here</Link></h4>
         </div>
        </div>
    </div>
  )
}
export default Login