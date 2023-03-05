import React,{ useState, useEffect } from "react";
import './Choose.css'
import {FaUserNurse,FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Choose = () => {
  const [text, setText] = useState("User");
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText("User or Medical Personnel");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [text]);
  return (
    <div className='Choose'>
        <div className='Choose-wrap'>
            <div className='choose-text'>
                <h1>Kindly Choose</h1>
                <p>
                  Are you a <b> {text}</b>?
                </p>
            </div>
            <div className='choose-buttons'>

              
            <button  className='choose-button-med' onClick={()=> navigate('/adminsignup')} >
              <FaUserNurse fontSize={25} color="#006edc"/>
            For medical personnel
            </button>





            <button onClick={()=> navigate('/usersign')} className='choose-button-user'>
              <FaUserCircle fontSize={25} color="#006edc"  />
            For Users
            </button>
            </div>
            <div className='chooseBack'>
            <button className='chooseBackButt'  onClick={()=> navigate('/')}>
              Go Back
            </button>
        </div>
    </div>
    </div>
  )
}

export default Choose