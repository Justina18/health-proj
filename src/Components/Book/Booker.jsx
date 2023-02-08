import React from 'react'

const Booker = (props) => {
  return (
    <div className='books'>
        <div
        image={props.image} 
          text={props.text}>
        </div>
    </div>
  )
}

export default Booker