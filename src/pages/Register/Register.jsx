import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Social Force</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem quo eum aliquam esse, sint perferendis veniam earum quae recusandae eaque quos aliquid eveniet veritatis quidem nesciunt ab quisquam eius!</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Passowrd' />
                    <input type="email" placeholder='Email'/>
                    <input type="text" placeholder='Name' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
