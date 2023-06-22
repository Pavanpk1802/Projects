import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import {AiFillApple} from 'react-icons/ai';
import './signForm.css'
import { Link } from 'react-router-dom';
export const SignForm = () => {
  return (
    <>
    <div className='signin'>
        <div className='heading'>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
        </div>
        <div className='icons'>
            <div><button id='google-icon'><FcGoogle size={18} style={{marginRight:'8px'}}/>Sign in with Google</button></div>
            <div><button id='apple-icon'><AiFillApple size={18} style={{marginRight:'8px',color:'#999999'}}/>Sign in with Apple</button></div>
        </div>
        <div className='form'> 
            <form action="" onSubmit={ (e)=>{
                e.preventDefault();
            }
            }>
                <label htmlFor="email">Email address</label>
                <input type="text" name="email" id="email" placeholder='Enter your email...'/>
                <label htmlFor="password" className='password'>Password</label>
                <input type="password" name="password" id="password" placeholder='Enter your Password...'/>
                <span>Forgot password?</span>
                <Link to='/dashboard'>
                <button className='submit-btn'>Sign in</button>
                </Link>
            </form>
        </div>
        <p className='register'>Don't have an account? <span>Register here</span></p>
    </div>
    </>
  )
}
