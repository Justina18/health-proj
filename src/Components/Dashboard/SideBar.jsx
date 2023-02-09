import './Profile.css'
import React from 'react'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate,NavLink } from 'react-router-dom';
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'

const SideBar = () => {

  const navigate = useNavigate()
  
  const activeColorObject ={
    color: "#006edc",
    fontWeight: 700,
    backgroundColor: 'white'
  }
  
  const colorObject ={
    color: "white",
    fontWeight:500,
  }


  return (
        <div className='sided'>
            <div className='side-head'>
                <h4 onClick={()=> navigate('/dashboard')}>
                Dashboard
                </h4>
                <h2>Albert Weed</h2>
          </div>
          <div className='dash-txt'>
            <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to="/" >
              <AiFillHome color='white' fontSize={20}/>  
              <p className='dash-p'>  Home</p>
              </NavLink>
              <br/>
              <NavLink  style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to='/profile' >
               <BiUserCircle color='white' fontSize={20}/><p className='dash-p'>   Your Profile</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to='/appointment'>
               <BsJournalBookmarkFill  color='white'  fontSize={18}/>
               <p  className='dash-p'>Appointments and Schedule</p>
              </NavLink>
              <br/>
              <NavLink  style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} to='/notifications' className='p-wrap'>
               <BiBell  color='white' fontSize={20}/>  <p className='dash-p'> Notifications</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject}  to='/texts' className='p-wrap'>
              <AiOutlineMessage color='white'  fontSize={20}/>  <p className='dash-p'>  Messages</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject}  to='/settings' className='p-wrap'>
               <AiOutlineSetting color='white'  fontSize={20}/> <p className='dash-p'> Settings</p>
              </NavLink>
          </div>
        </div>
  )
}

export default SideBar