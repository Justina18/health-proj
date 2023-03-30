import React from 'react'

const BookForm = (props) => {
  return (
    <div className='BookForm'>
        <input
        type={props.type}
        name={props.name}
        onChange={(e) => {
          props.handleChange(e);
        }}
        required={props.required}
        className="inp"
        // onFocus={() => props.name === "confirmPassword" && setFocuses(true)}
        // focus={focuses.toString()}
        // onBlur={Focused}
      />
      <span className="error-message">{props.errMsg}</span>
    </div>
  )
}

export default BookForm;