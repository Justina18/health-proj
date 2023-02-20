import React, { useState } from 'react'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";
export default function Form(props) {
  const [focus, setFocus] = useState(false)

  const handleFocus = (e) => {
    setFocus(true)
  }
  return (
    <>
      <div className='signup_form_input_wrap'>
        <div className='signup_input_warp'>
          <input  className='SignUp_input'
            onChange={props.onChange}
            placeholder={props.placeholder} type={props.type}
            name={props.name}
            value={props.value}
            required={props.required}
            pattern={props.pattern}
            onBlur={handleFocus}
            onFocus={() => { props.name === 'confirmpassword' && setFocus(true) }}
            focused={focus.toString()}
          />
          <span className='err'>{props.err}</span>
        </div>
        {props.name === "password" ? props.view ? <AiOutlineEyeInvisible onClick={() => { props.setView(!props.view) }} /> : <MdRemoveRedEye className='sign_eye pointer' onClick={() => { props.setView(!props.view) }} /> : null}
      </div>

    </>
  )
}