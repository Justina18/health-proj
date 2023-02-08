import React from 'react'
import SideBar from './SideBar'
import './User.css'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {MdAttachMoney} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'

const UserDash = () => {
  return (
    <div className='user-dash'>
        <SideBar/>
        <div className='user-dash-wrap' >
          <div className='user-dash-head'>
            <h3 className='user-dash-h4'>Dashboard</h3>
            <div>
            <img className='prof-head-img' src='/Morest.png' onClick={()=> navigate('/')}/>
            </div>
          </div>
          <div className='user-dash-wrap-upper-wrapper'>
          <div className='user-dash-wrap-upper'>

              <div>
              <HiOutlineUsers fontSize={40}/>
              </div>

              <div>
                <p>Patients</p>
                <h2>132</h2>
              </div>

          </div>

          <div className='user-dash-wrap-upper'>

              <div>
              <MdAttachMoney fontSize={40}/>
              </div>

              <div>
                <p>Patients</p>
                <h2>132</h2>
              </div>

          </div>

          <div className='user-dash-wrap-upper'>

              <div>
              <BsFillJournalBookmarkFill fontSize={30}/>
              </div>

              <div>
                <p>Patients</p>
                <h2>132</h2>
              </div>
            </div>
          </div>

          <div className='user-dash-wrap-lower-wrapper'>
            <h3>
              Appointments
            </h3>
            <div>

              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 56.png'/>
                <div className='user-dash-wrap-lower-text'>
                  <div>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                  </div>
                  <div>
                    <p>  14:00</p>
                  </div>
                  <div>
                    <p>8 February</p>
                  </div>
                </div>
              </div> 

            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDash;