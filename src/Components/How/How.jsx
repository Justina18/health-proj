import React from 'react'
import './How.css'

const How = () => {
  return (
    <div className='How'>
        <div className='How-wrap'>
         <h1 className='How-h1'>How it works!</h1>
         <div className='How-wrapped'>
               <div className='How-one'>
               <div className='How-img-wrap'>
                  <img className='How-img' src='/sign.png'/>
               </div>
               <div className='How-text-one'>
                  <h2>Sign up to Health360</h2>
                     <p>Download the iOS or Android <br/> version of the app</p>
               </div>
               </div>
               
               <div className='How-one1'>
               <div className='How-img-wrap'>
                  <img className='How-img' src='/book.png'/>
               </div>
               <div className='How-text'>
                  <h2>Book a consultation</h2>
                     <p>Select a day, time, and doctor that<br/> suits your preference</p>
               </div>
               </div>

               <div className='How-one2'>
               <div className='How-img-wrap'>
                  <img className='How-img' src='rec.png'/>
               </div>
               <div className='How-text'>
                  <h2>Receive your recommendations</h2>
                     <p>Your notes, prescriptions, and test requests are <br/> available immediately after your consultation</p>
               </div>
            </div>
               </div>
        </div>
    </div>
  )
}

export default How