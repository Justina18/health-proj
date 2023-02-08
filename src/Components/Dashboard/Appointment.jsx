
import React,{useState, useRef, useReducer} from 'react'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate,NavLink } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'
import SideBar from './SideBar';

const Appointment = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => { 
    setToggle(!toggle) 
  setIsOpen(!isOpen)
  }
  const Justify = (<FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />)
  const FaTime = (<div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
                </div>)

const activeColorObject ={
  color: "#1B75BC",
  fontWeight: 700
}

const colorObject ={
  color: "grey",
}


  return (
    <div className='Appointment'>
       <div className='Burger'>
                    {toggle ? Justify : FaTime}
      </div>
                {isOpen && (
                      <div className='siding'>
                      <div className='side-head'>
                <h4 onClick={()=> navigate('/dashboard')}>
                Dashboard
                </h4>
                <h2>Albert Weed</h2>
          </div>
          <div className='dash-txt'>
            <div className='p-wrap' onClick={()=> navigate('/')}>
              <AiFillHome color='grey' fontSize={20}/>  <p className='dash-p'>  Home</p>
              </div>
              <br/>
              <div className='p-wrap' onClick={()=> navigate('/profile')} >
               <BiUserCircle color='grey'  fontSize={20}/><p className='dash-p'>   Your Profile</p>
              </div>
              <br/>
              <div className='p-wrap'onClick={()=> navigate('/appointment')}>
               <BsJournalBookmarkFill color='grey'  fontSize={18}/><p  className='dash-p'>   Appointments and Schedule</p>
              </div>
              <br/>
              <div className='p-wrap'>
               <BiBell  color='grey' fontSize={20}/>  <p className='dash-p'> Notifications</p>
              </div>
              <br/>
              <div className='p-wrap'>
              <AiOutlineMessage color='grey'  fontSize={20}/>  <p className='dash-p'>  Messages</p>
              </div>
              <br/>
              <div className='p-wrap'>
               <AiOutlineSetting color='grey'  fontSize={20}/> <p className='dash-p'> Settings</p>
              </div>
          </div>
                  </div>
                )}
          <SideBar/>
    </div>
  )
}

export default Appointment