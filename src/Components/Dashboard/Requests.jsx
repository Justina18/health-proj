import React from 'react'
import SideBar from './SideBar'
import './User.css'
import { useNavigate} from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'


const Requests = () => {
    
  const navigate = useNavigate()
  
  return (
    <div>
        <SideBar/>
        
        <h3 className='user-dash-h3'>
              Appointments Requests
        </h3>
        <div>
              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 61.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                    <p>13 March  <b>10:00</b></p>
                  </div>
                  <div>
                    <TiTick fontSize={20} color='green'/>
                    <MdOutlineCancel fontSize={20} color='red'/>
                  </div>
                </div>
              </div>

              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 62.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                    <p>13 March  <b>10:00</b></p>
                  </div>
                  <div>
                    <TiTick fontSize={20} color='green'/>
                    <MdOutlineCancel fontSize={20} color='red'/>
                  </div>
                </div>
              </div>
              

              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 63.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                    <p>13 March  <b>10:00</b></p>
                  </div>
                  <div>
                    <TiTick fontSize={20} color='green'/>
                    <MdOutlineCancel fontSize={20} color='red'/>
                  </div>
                </div>
              </div>

              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 59.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                    <p>13 March  <b>10:00</b></p>
                  </div>
                  <div>
                    <TiTick fontSize={20} color='green'/>
                    <MdOutlineCancel fontSize={20} color='red'/>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Requests