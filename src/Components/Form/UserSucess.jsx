import React from 'react'
import { useNavigate } from 'react-router-dom';


const UserSucess = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='logSuccess-wrap'>
      <div>
        <img className='logSuccess-img' src='/success.png' />
      </div>
      <div className='this'>
        <h2 className='logh2'>
        You have  successfully
        <br/>
<b className='suc'>Signed Up!</b>
        </h2>
        <button className='button' onClick={()=> navigate('/user dashboard')}>
          Continue
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default UserSucess;