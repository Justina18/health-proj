import React from 'react'
import './Are.css'
import { useNavigate } from 'react-router-dom';

const Are = () => {
  
  const navigate = useNavigate()

  return (
    <div className='Are'>
        <h1 className='are-h1'>
                Are you a doctor?
            </h1>
        <div className='are-wrap'>
          <div className='are-img-wrap'>
            <img className='are-img' src='/are2.png' />
          </div>
            <div className='are-text'>
            <p>
            Health 360 is available to all healthcare <br/> providers including practitioners,<br/>specialists, therapists, counsellors,<br/> and more.
            <br/>
           <br/>
           

            Need more information about doctors on <br/>Health360?   <br/> Click on the more <b>info button</b> below or contact<br/> our doctor Richard team at tech@health360.com 
            </p>
        </div>
        </div>
        <div>
        <button onClick={()=> navigate('/more info')} className='are-button'>More Info</button>
        </div>
    </div>
  )
}

export default Are