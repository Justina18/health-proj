import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'; 
import {MdLocationPin} from 'react-icons/md'
import './Book.css'
import Time from './Time';
import {BsSuitHeartFill,BsSuitHeart} from 'react-icons/bs'

const Book = () => {

  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false) 
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => { setToggle(!toggle) }
  const FiAlignJustif = (<BsSuitHeart  onClick={handleToggle} fontSize={15}/> )
  const FaTime = (<div>
      <BsSuitHeartFill color='E22727'onClick={handleToggle}  fontSize={15}/> 
                </div>)


  return (
    <div  className='book'>
       <div className='head-img-wrap' >
                <img onClick={()=> navigate('/')} className='head-img' src='/Morest.png' />
             </div>
      <div className='book-wrap'>
       
        <h1 className="book-header">Book an Appointment</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
    <Time showTime={showTime} date={date}/>
    <div className='wrappest'>
    <NavLink to='/profile' className='book-wrap-main'>
            <div className='book-img-wrap'>
              <img  className='book-img' src='/shaa.png'/>
            </div>
            <div className='book-wrap-main-text'>
              <h2 className='book-h'>
                Joseph Jonah 
              </h2>
              <p>Dietitian</p>
              <div>
              <MdLocationPin fontSize={18}/>Abuja
              </div>
              <div className='book-foot'>
              <p> $1500</p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/profile' className='book-wrap-main'>
            <div className='book-img-wrap'>
              <img  className='book-img' src='/her.png'/>
            </div>
            <div className='book-wrap-main-text'>
              <h2 className='book-h'>
                Isaac Samuel 
              </h2>
              <p>Physician</p>
              <div>
              <MdLocationPin fontSize={18}/>Lagos
              </div>
              <div className='book-foot'>
              <p> $1500</p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/profile' className='book-wrap-main'>
            <div className='book-img-wrap'>
              <img  className='book-img' src='/him.png'/>
            </div>
            <div className='book-wrap-main-text'>
              <h2 className='book-h'>
                Joshua Lands 
              </h2>
              <p>Nurse</p>
              <div>
              <MdLocationPin fontSize={18}/>Uyo
              </div>
              <div className='book-foot'>
              <p> $1500</p>
              </div>
            </div>
          </NavLink>

          <NavLink to='/profile' className='book-wrap-main'>
            <div className='book-img-wrap'>
              <img  className='book-img' src='/her_2.png'/>
            </div>
            <div className='book-wrap-main-text'>
              <h2 className='book-h'>
                Felix Able 
              </h2>
              <p>Surgeon</p>
              <div>
              <MdLocationPin fontSize={18}/>Delta
              </div>
              <hr/>
              <div className='book-foot'>
              <p> $1500</p>
              </div>
            </div>
          </NavLink>
        </div>
         <button className='book-butt'>
                Book Now
             </button>
        </div>
       
</div>
  )
}

export default Book