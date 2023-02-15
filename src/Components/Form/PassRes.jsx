import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AllForm.css'


const PassRes = () => {
  return (
    <div className='apps'>
        <div className='reset_main'>
      <div className='reset_wrap'> 
      <h3>Reset Password</h3>
      <p className='resetPasswordText'>Set a new password for your profile on Agri_Market</p>

      <input
      placeholder='  Set New Password'
      className='reset_input'
       />
      <input 
      placeholder='  Confirm New Password'
      className='reset_input' />

      <button className='reset_button'> Reset Password </button>

      </div>
    </div>
    </div>
  )
}

export default PassRes;