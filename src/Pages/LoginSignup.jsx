import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="Your Name" id="" placeholder='USER Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>

        </p>
        <div className="loginsignup-agree">
          <input type="checkbox"/>
          <p>By continuing , i agree to the terms of use and privecy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
