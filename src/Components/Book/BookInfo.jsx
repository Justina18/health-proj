import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Time from './Time';


const BookInfo = (setDate, showTime, date, props) => {
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)
    function displayInfo(e) {
        setInfo(true);
        setEvent(e.target.innerText);
     }

  return (
    <div>
        <div className='app-date'>
            {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
        </div>
    </div>
  )
}

export default BookInfo