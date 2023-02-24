import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='cont'>
        <div className='cont-wrap'>
            <div className='spin-wrap'>
                <img className='spin' src='/spin.png' />
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>Our team is happy to answer any questions. Please fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact