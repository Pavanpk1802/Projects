import React from 'react';
import './signIn.css';
import { SignForm } from '../components/signForm';

export const SignIn = () => {
  return (
    <>
    <div className='main'>
    <div className='right'>
        <h1 id='heading'>
            Board.
        </h1>
    </div>
    <div className='left'>
        <div className='sign-in'> 
        <SignForm/>
        </div>
    </div>
    </div>
    </>
  )
}
