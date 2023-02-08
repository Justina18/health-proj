import React,{useState} from 'react'
import './Header.css'
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => { 
    setToggle(!toggle) 
  setIsOpen(!isOpen)
  }
  const FiAlignJustif = (<FiAlignJustify fontSize={25} color="#006edc" onClick={handleToggle} />)
  const FaTime = (<div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                </div>)

  return (
    <div className='Header'>
      
        <div className='Head-wrap'>
          
            <div>
                <img onClick={()=> navigate('/')} className='head-img' src='/Morest.png' />
             </div>
              {isOpen && (
             <div className='hid'>
              <div className='head-link'>
              <h4  onClick={()=> navigate('/')} className='head-link' >Home</h4>
              <h4 className='head-link' onClick={()=> navigate('/dashboard')}>Dashboard</h4>
              <h4 className='head-link'  onClick={()=> navigate('premium')}>Go Premium</h4>
           </div>
             </div> )}
            <div className='head-links'>
                <h4  onClick={()=> navigate('/')} className='head-links' >Home</h4>
                <h4 className='head-links' onClick={()=> navigate('/dashboard')}>Dashboard</h4>
             </div>
             <div className='head-buttons'>
              <button className='head-log-button '  onClick={()=> navigate('/log in')}>Log In</button>
                <button className='head-sign-button' onClick={()=> navigate('/choice')}>Sign Up</button>
             </div>
              <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
        </div>
        <hr className='line'/>
    </div>
  )
}

export default Header;