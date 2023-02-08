import React,{useState} from 'react'
import './Book.css'


const time = ['08:00','09:00','10:00','14:00','15:00', '19:00', '21:00']
const Time = (props) => {
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)
   
    function displayInfo(e) {
      setInfo(true);
      setEvent(e.target.innerText);
   }
  return (
    <>
    <div className='app-date'>
    {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
  </div>
 <div className="times">
 {time.map(times => {
  return (

  <div className='time-butts-wrap'>
    <button className='time-butts' onClick={(e)=> displayInfo(e)}> {times} </button>
  </div>
      )
   })}
  
</div>
</>
  )
}

export default Time