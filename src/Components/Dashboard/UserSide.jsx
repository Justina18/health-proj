import './Profile.css'
import React from 'react'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate,NavLink } from 'react-router-dom';
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'
import {FiLogOut} from 'react-icons/fi'

const UserSide = () => {

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
  const logOut = async () => {
    console.log(user._id)
    try {
      const res = await axios.post(`https://health360-h4ws.onrender.com/api/logout/${user._id}`);
      console.log(res.data);
      res.status === 200 ? dispatch(clear_userData()) : null;
      res.status === 200 ? navigate("/") : null;
    } catch (e) {
      console.log(e)
    }
  };


  return (
        <div className='sided'>
            <div className='side-head'>
            <img
            className="dash-ic-img"
            src="/Premium.png"
            onClick={() => navigate("/")}
          />
          </div>
          <div className='dash-txt'>
            <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to="/" >
              <AiFillHome fontSize={20}/>  
              <p className='dash-p'>  Home</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to='/user_dashboard'>
              <RxDashboard fontSize={20}/>  
              <p className='dash-p'>  Dashboard</p>
              </NavLink>
              <br/>
              <NavLink  style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to='/User Profile' >
               <BiUserCircle fontSize={20}/><p className='dash-p'>   Your Profile</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} className='p-wrap' to='/appointment'>
               <BsJournalBookmarkFill  fontSize={18}/>
               <p  className='dash-p'>Appointments</p>
              </NavLink>
              <br/>
              <NavLink  style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} to='/notifications' className='p-wrap'>
               <BiBell fontSize={20}/>  <p className='dash-p'> Notifications</p>
              </NavLink>
              <br/>
              <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject}  to='/ChatRoom' className='p-wrap'>
              <AiOutlineMessage color='white'  fontSize={20}/>  <p className='dash-p'>  Messages</p>
              </NavLink>
              <br/>
              {/* <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject}  to='/settings' className='p-wrap'>
               <AiOutlineSetting color='white'  fontSize={20}/> <p className='dash-p'> Settings</p>
              </NavLink> */}
          </div>
          <div className='logOut' onClick={() => logOut()}>
            <FiLogOut color='#d9d9d9' fontSize={30}/><h4>Log Out</h4>
          </div>
        </div>
  )
}

export default UserSide;