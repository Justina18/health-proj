import './Profile.css'
import React,{useState, useRef, useReducer} from 'react'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import { useNavigate,NavLink } from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {FaTimes} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineSetting} from 'react-icons/ai'
import {BiUserCircle,BiBell} from 'react-icons/bi'
import SideBar from './SideBar';

const Profile = () => {
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


  return (
      <div className='Profile'>
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

        <div className='Profile-wrap'>
        <div className='prof-head'>
        <div className='prof-head-img-holder' >
            <BiBell  color='#1B75BC' fontSize={20}/>
            <img className='prof-head-img' src='/Morest.png' onClick={()=> navigate('/')}/>
        </div>
        </div>
            <div className='Profile-wrap-head'>
            <img className='pro-img' src='/profi.jpg'/>
            <div className='pro-text'>
               <h4>Ferdinand Anozie</h4>
               <p className='pro-p'>Dietitian</p>
              </div>
            </div>

            <div className='pRo'>
              <div className='holder'>
                <div>
                  <h4 className='pro-p'>Name</h4>
                  <p className='holder-wrap'>Albert Weed</p>
                </div>

                <div>
                  <h4 className='pro-p'>Email</h4>
                  <p className='holder-wrap'>albertweed@gmail.com</p>
                </div>
              </div>

              <div className='holder'>
                <div>
                  <h4 className='pro-p'>Location</h4>
                  <p className='holder-wrap'>Nigeria</p>
                </div>

                <div>
                  <h4 className='pro-p'>Portal  Code</h4>
                  <p className='holder-wrap'>2749583</p>
                </div>
              </div>

              <div className='holder'>
                <div>
                  <h4 className='pro-p'>Phone</h4>
                  <p className='holder-wrap'>+234906284095</p>
                </div>

                <div>
                  <h4 className='pro-p'>About</h4>
                  <p className='holder-wrap'>Donec rutrum congue ubjxws</p>
                </div>
              </div>
            </div>
            <button className='pro-butt'>Save Changes</button>
        </div>
      </div>
  )
}

export default Profile