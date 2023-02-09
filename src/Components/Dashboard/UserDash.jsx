import React from 'react'
import SideBar from './SideBar'
import './User.css'
import { useNavigate} from 'react-router-dom';
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {MdAttachMoney,MdOutlineCancel} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'
import {CiFolderOn} from 'react-icons/ci'
import {TiTick} from 'react-icons/ti'

const UserDash = () => {
  
  const navigate = useNavigate()
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
                <p>Income Made</p>
                <h2>$432</h2>
              </div>

          </div>

          <div className='user-dash-wrap-upper'>

              <div>
              <BsFillJournalBookmarkFill fontSize={30}/>
              </div>

              <div>
                <p>Appointments</p>
                <h2>132</h2>
              </div>
            </div>
          </div>
            <h3 className='user-dash-h3'>
              Appointments
            </h3>
            <div className='lower-user-dash-wrap'>
          <div className='user-dash-wrap-lower-wrapper'>
            <div>
              <div className='user-dash-wrap-lower'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 56.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Beth Mccoy</h4>
                    <p>Migraines</p>
                  </div>
                  <div>
                    <p>  10:00</p>
                  </div>
                  <div>
                    <p>6 February</p>
                  </div>
                </div>
              </div>

              <div className='user-dash-wrap-lower-one'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 57.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Evan Henry</h4>
                    <p>Aches</p>
                  </div>
                  <div>
                    <p>  1:00</p>
                  </div>
                  <div>
                    <p>28 February</p>
                  </div>
                </div>
              </div>  

              <div className='user-dash-wrap-lower-one'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 57.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Henry Evan </h4>
                    <p>Back aches</p>
                  </div>
                  <div>
                    <p>  4:00</p>
                  </div>
                  <div>
                    <p>12 February</p>
                  </div>
                </div>
              </div> 

              <div className='user-dash-wrap-lower-two'>
                <img  className='user-dash-wrap-lower-img' src='/Ellipse 58.png'/>
                <div className='user-dash-wrap-lower-text'>
                <div className='user-dash-wrap-lower-text-upper'>
                    <h4>Bessie Alex</h4>
                    <p>Headaches</p>
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

          <div className='Today'>
            <div  className='user-dash-wrap-lower-img-wrap'>
              <img  className='user-dash-wrap-lower-img' src='/Ellipse 58.png'/>
                <div className='user-dash-wrap-lower-text'>
                    <div className='user-dash-wrap-lower-text-upper'>
                        <h4>Bessie Alex</h4>
                        <p>2235 Avondale Ave Pasadena</p>
                        <p>Oklahoma 83900</p>
                      </div>
                </div>
            </div>
            <div>

            <div className='user-dash-wrap-lower-text-upper-low-wrap'>
              <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>D.O.B</h5>
                        <p>26th February 1994</p>
                      </div>
                      <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>Sex</h5>
                        <p>Female</p>
                      </div>
                      <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>Weight</h5>
                        <p>58kg</p>
                      </div>
            </div>


            <div className='user-dash-wrap-lower-text-upper-low-wrap'>
              <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>Height</h5>
                        <p>162cm</p>
                      </div>
                      <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>Case</h5>
                        <p>Headaches</p>
                      </div>
                      <div className='user-dash-wrap-lower-text-upper-low'>
                        <h5 className='user-lower-h'>Method</h5>
                        <p>Chat</p>
                      </div>
            </div>
            <div className='user-dash-butt'>
              <button className='numb-butt'> <AiOutlinePhone fontSize={16}/> (234) 555-0212</button>
              <button className='doc-butt'> <CiFolderOn fontSize={16}/> Documents </button>
            </div>
            </div>
          </div>
        </div>

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
    </div>
  )
}

export default UserDash;