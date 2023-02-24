import React,{ useRef, useContext,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AiFillHome} from 'react-icons/ai'
import { Contexts } from '../../Api/Context';
import "./AllForm.css";

const PassRes = () => {
    
  const navigate = useNavigate()
  const inputRef = useRef('')
  const { id } = useParams()
  console.log(id)
  const forget = async () => {
    const res = await axios.post(`https://health360-h4ws.onrender.com/api/userchangepassword/${id}/token`, { password: inputRef.current.value })
    res.status === 200 ? navigate("/User Login") : null
    console.log(res)
  }

  return (
    <div className="log-apps">
      <AiFillHome className='res-home'  onClick={() => navigate("/")} color='white' fontSize={30}/>
      <div className="reset_main">
        <div className="reset_wrap">
          <h2>Reset Password</h2>
          <p className="resetPasswordText">
            Set a new password for your profile on Health-360
          </p>
          <div className="reset-inp" >
          <input title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' required placeholder="Set New Password" ref={inputRef} className="res-inp" />
          <input title="Must match password" required placeholder="  Confirm New Password" className="res-inp" />
          </div>
          <button className="reset_button" onClick={() => { forget() }}> Update Password </button>
        </div>
      </div>
    </div>
  );
};

export default PassRes;
